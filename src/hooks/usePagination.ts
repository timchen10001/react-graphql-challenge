import { useEffect, useState } from "react";
import { useStateValue } from "../providers/StateProvider";
import { difference } from "../utils/difference";
import { sleep } from "../utils/sleep";

export const usePagination = () => {
  const [{ dispatching, limit, selected }, dispatch] = useStateValue();

  const isOnBottom = (): boolean => {
    const wrapper = document.querySelector(".wrapper");
    const wrapperViewHeight = document.body.clientHeight * 0.9;
    const scrollTop = wrapper?.scrollTop;
    const scrollHeight = wrapper?.scrollHeight;
    if (typeof scrollTop !== "number" || typeof scrollHeight !== "number")
      return false;
    return difference(wrapperViewHeight + scrollTop, scrollHeight) < 1;
  };

  const isOnTop = (): boolean => {
    return document.querySelector(".wrapper")?.scrollTop === 0;
  };

  const handleOnWheel = async (e: React.WheelEvent<HTMLDivElement>) => {
    // 如果在 dispatching || 滾動差小於 50 -> 不做任何改變
    if (dispatching || difference(e.deltaY, 0) < 100) return;

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

    // debugging
    // console.log({ newSelected });

    // dispatching new state ...
    dispatch({ type: "SET_DISPATCHING", dispatching: true });
    dispatch({ type: "SET_SELECTED", selected: -1 });
    await sleep(1000);
    dispatch({ type: "SET_SELECTED", selected: newSelected % limit });
    await sleep(2000);
    dispatch({ type: "SET_DISPATCHING", dispatching: false });
  };

  return { handleOnWheel };
};
