import { Theme, Typography } from '@material-ui/core';
import { FC } from 'react';

interface ResponsiveH4Props {
    children: React.ReactNode;
    isMobile: boolean;
    theme: Theme;
}

export const ResponsiveH4: FC<ResponsiveH4Props> = ({
    children,
    isMobile,
    theme,
}) => (
    <Typography
        variant="h4"
        style={{ fontSize: isMobile ? '28px' : theme.typography.h4.fontSize }}
    >
        {children}
    </Typography>
);
