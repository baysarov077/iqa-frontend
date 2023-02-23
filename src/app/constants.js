import { getBaseUrl } from 'common/utils/url';
import { theme } from './theme';

const lsPrefix = 'iqa_';

export const BASE_API_URL = getBaseUrl();

export const LS_TOKEN_KEY = `${lsPrefix}accessToken`;

export const AUTHORIZE_SERVICE_URL = `${BASE_API_URL}auth/github`;

export const QUESTIONS_PER_PAGE = 5;

export const AVAILABLE_THEME_COLORS = Object.keys(theme.colors);
export const DEFAULT_COLOR = theme.defaultColor;
export const SCROLL_TO_TOP_SHOW = 500;

export const TAG_MAX_LENGTH = 15;

export const MAX_NUMBER_OF_TAGS = 5;

export const MAX_LAST_COMMENT_LENGTH = 140;
