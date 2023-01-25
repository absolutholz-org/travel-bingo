import { SIGN_DIRECTORY } from '../../../../Game.constants';
import { SignsProps } from './_Signs.annotations';
import * as S from './_Signs.styled';

export function Signs({ onChange, selectedSigns, signs }: SignsProps) {
	return (
		<fieldset>
			<legend>Included signs</legend>

			<S.Signs_List>
				{signs.map(({ filename, id, name }) => (
					<S.Signs_Sign htmlFor={`sign_${id}`} key={`sign_${id}`}>
						<S.Signs_SignImage>
							<img
								alt={id}
								loading="lazy"
								src={`${SIGN_DIRECTORY}germany/${filename}`}
							/>
						</S.Signs_SignImage>
						<input
							checked={selectedSigns.includes(id)}
							id={`sign_${id}`}
							onChange={onChange}
							type="checkbox"
							value={id}
						/>
						<S.Signs_SignLabel>{name.de}</S.Signs_SignLabel>
					</S.Signs_Sign>
				))}
			</S.Signs_List>
		</fieldset>
	);
}
