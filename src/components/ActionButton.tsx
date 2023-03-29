import { Button } from "./Button.styled";
import { useAppDispatch } from "../app/hooks";
import { increment } from "../features/questionIndex/indexSlice";

interface ButtonProps {
  text: string;
  action?: Function;
  margin?: number;
  padding?: number;
}

/**
 * @param {string} text
 * @param {Function} action --a dispatch function that modifies the behavior of the button
 * @default returns a styled button that will by DEFAULT increment the question index count, pass a action matching the reducer action you want to match if you want to decrement the count, simply pass the decrement keyword
 */
export default function ActionButton({
  text,
  action,
  margin,
  padding,
}: ButtonProps) {
  const dispatch = useAppDispatch();
  const buttonAction = action || increment;

  return (
    <Button
      margin={margin}
      padding={padding}
      onClick={() => dispatch(buttonAction())}
    >
      {text}
    </Button>
  );
}
