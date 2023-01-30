import { Popover } from 'antd';
import { useAuth } from 'common/context/Auth/useAuth';
import PropTypes from 'prop-types';
import FavoritePopoverContent from './FavoritePopoverContent';

export const FavoritePopover = ({ children }) => {
  const { token } = useAuth();

  const text = 'что бы иметь возможность сохранять вопросы';

  if (!token) {
    return (
      <Popover
        placement="bottomLeft"
        trigger="click"
        content={<FavoritePopoverContent text={text} />}
      >
        {children}
      </Popover>
    );
  }

  return children;
};

FavoritePopover.propTypes = {
  children: PropTypes.node.isRequired,
};
