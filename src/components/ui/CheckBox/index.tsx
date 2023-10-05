import type { HTMLAttributes, ReactNode } from 'react';

import { faSquareCheck as unCheckedIcon } from '@fortawesome/free-regular-svg-icons';
import { faSquareCheck as checkedIcon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cva } from 'class-variance-authority';
import clsx from 'clsx';

import { IconSize } from './constant';
import {
  container,
  hiddenCheck,
  label,
  icon as iconStyle,
  iconLabel,
  sSpacing,
  mSpacing,
  lSpacing,
  unCheckIcon,
} from './index.css';

export type SizeProps = 's' | 'm' | 'l';

type Props = {
  checked: boolean;
  labelText: string;
  icon?: {
    checkedIcon: ReactNode;
    unCheckedIcon: ReactNode;
  };
  size: SizeProps;
  className?: string;
} & HTMLAttributes<HTMLInputElement>;

const iconLabelStyle = cva(iconLabel, {
  variants: { size: { s: sSpacing, m: mSpacing, l: lSpacing } },
});

export const CheckBox: React.FC<Props> = ({
  onChange,
  checked,
  labelText,
  icon,
  size,
  className,
  ...props
}) => (
  <label className={clsx(label, className)}>
    <div className={container}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className={hiddenCheck}
        {...props}
      />
      <div className={iconStyle}>
        {checked ? (
          <div>
            {icon?.checkedIcon || (
              <FontAwesomeIcon icon={checkedIcon} size={IconSize[size]} />
            )}
          </div>
        ) : (
          <div>
            {icon?.unCheckedIcon || (
              <FontAwesomeIcon
                className={unCheckIcon}
                icon={unCheckedIcon}
                size={IconSize[size]}
              />
            )}
          </div>
        )}
      </div>
    </div>
    <p className={iconLabelStyle({ size })}>{labelText}</p>
  </label>
);
