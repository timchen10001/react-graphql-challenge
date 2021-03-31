import React from "react";
import { useStateValue } from "../providers/StateProvider";
import { difference } from "../utils/difference";
import { sleep } from "../utils/sleep";

export const usePagination = () => {
  const [{ dispatching, limit, selected }, dispatch] = useStateValue();

  const isOnBottom = (): boolean => {
    const wrapper = document.querySelector(".wrapper");
    const wrapperViewHeight = document.body.clientHeight;
    const scrollTop = wrapper?.scrollTop;
    const scrollHeight = wrapper?.scrollHeight;
    if (typeof scrollTop !== "number" || typeof scrollHeight !== "number")
      return false;
    return (
      difference(wrapperViewHeight + scrollTop, scrollHeight) <
      1 + wrapperViewHeight * 0.1
    );
  };

  const isOnTop = (): boolean => {
    return document.querySelector(".wrapper")?.scrollTop === 0;
  };

  const setState = async (newSelected: number) => {
    dispatch({ type: "SET_DISPATCHING", dispatching: true });
    dispatch({ type: "SET_SELECTED", selected: -1 });
    await sleep(1000);
    dispatch({ type: "SET_SELECTED", selected: newSelected % limit });
    await sleep(2000);
    dispatch({ type: "SET_DISPATCHING", dispatching: false });
  };

  const handleOnWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    // 如果在 dispatching || 滾動差小於 50 -> 不做任何改變
    if (dispatching || difference(e.deltaY, 0) < 40) return;

    const isScrollDown = e.deltaY > 0;

    // 滾輪往下 && 尚未達到限制數 -> selected++
    // 滾輪往上 -> 1.不為0 -> --selected 2. 為0 -> 接到尾巴
    let newSelected = selected;
    if (isScrollDown && selected < limit) {
      if (!isOnBottom()) return;
      newSelected++;
    } else if (!isScrollDown) {
      if (!isOnTop()) return;
      newSelected = selected ? --newSelected : limit - 1;
    }

    // dispatching new state ...
    setState(newSelected);
  };

  const handleTouchMove = (isScollDownByTouchMove: boolean | undefined) => {
    if (isScollDownByTouchMove === undefined || dispatching) return;

    let newSelected = selected;
    if (isScollDownByTouchMove && selected < limit) {
      if (!isOnBottom()) return;
      newSelected++;
    } else if (!isScollDownByTouchMove) {
      if (!isOnTop()) return;
      newSelected = selected ? --newSelected : limit - 1;
    }

    // dispatching new state ...
    setState(newSelected);
  };

  return { handleOnWheel, handleTouchMove };
};
