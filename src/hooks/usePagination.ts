import { useStateValue } from "../providers/StateProvider";
import { difference } from "../utils/difference";
import { sleep } from "../utils/sleep";

export const usePagination = () => {
  const [{ dispatching, limit, selected }, dispatch] = useStateValue();

  const handleOnWheel = async (e: React.WheelEvent<HTMLDivElement>) => {
    // 如果在 dispatching || 滾動差小於 50 -> 不做任何改變
    if (dispatching || difference(e.deltaY, 0) < 50) return;

    const isScrollDown = e.deltaY > 0;

    // 滾輪往下 && 尚未達到限制數 -> selected++
    // 滾輪往上 && 不為 -1 -> selected--
    let newSelected = selected;
    if (isScrollDown && selected < limit) {
      newSelected++;
    } else if (!isScrollDown) {
      newSelected = selected ? --newSelected : limit - 1;
    }

    // debugging
    // console.log({ newSelected });

    // dispatching new state ...
    dispatch({ type: "SET_DISPATCHING", dispatching: true });
    dispatch({ type: "SET_SELECTED", selected: newSelected % limit });
    await sleep(2000);
    dispatch({ type: "SET_DISPATCHING", dispatching: false });
  };

  return { handleOnWheel };
};
