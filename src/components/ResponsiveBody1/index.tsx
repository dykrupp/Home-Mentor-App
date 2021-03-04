import { Theme, Typography } from '@material-ui/core';
import { FC } from 'react';

interface ResponsiveBody1Props {
    isMobile: boolean;
    children: React.ReactNode;
    theme: Theme;
}

export const ResponsiveBody1: FC<ResponsiveBody1Props> = ({
    isMobile,
    children,
    theme,
}) => (
    <Typography
        variant="body1"
        style={{
            fontSize: isMobile ? '12px' : theme.typography.body1.fontSize,
        }}
    >
        {children}
    </Typography>
);
