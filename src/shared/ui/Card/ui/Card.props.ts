import { IDivAttributes } from '@/shared/types';
import { ECardRound, ECardTag, ECardType, TCardShadow } from '../model';

export interface ICardProps extends IDivAttributes {
	/** тег, из которого будет собрана карточка */
	tag?: ECardTag;
	/** округление карточки */
	round?: ECardRound;
	/** тема карточки */
	appearance?: ECardType;
	/** проявить бордер */
	border?: boolean;
	/** растягивает его на всю ширину */
	stretch?: boolean;
	/** определяет тип тени */
	shadow?: TCardShadow;
}
