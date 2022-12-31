import { ISignButton } from './_SignButton.annotations';

import * as S from './_SignButton.styled';

export function SignButton({
  description,
  file,
  name,
  onClick,
  status = 'open',
}: ISignButton): JSX.Element {
  const handleClick = () => {
    if (status === 'open') {
      onClick();
    }
  };

  return (
    <S.SignButton
      // disabled={status === 'closed'}
      onClick={handleClick}
      type="button"
    >
      <img src={`/signs/germany/${file}`} alt={description} />
      {status === 'closed' && (
        <S.SignButton_Check width="24" height="24" viewBox="0 0 24 24">
          <path
            d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z"
            fill="currentColor"
          />
        </S.SignButton_Check>
      )}
    </S.SignButton>
  );
}
