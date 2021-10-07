// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React, {CSSProperties} from 'react';

type Props = {
    className?: string,
    fill?: string,
    style?: CSSProperties,
}

export default function HorizontalDotsIcon(props: Props) {
    return (
        <svg
            {...props}
            width='12px'
            height='4px'
            viewBox='0 0 12 4'
            role='img'
        >
            <path
                d='M9.006 2.00005C9.006 1.59205 9.15 1.24405 9.438 0.956048C9.738 0.656048 10.092 0.506048 10.5 0.506048C10.908 0.506048 11.256 0.656048 11.544 0.956048C11.844 1.24405 11.994 1.59205 11.994 2.00005C11.994 2.40805 11.844 2.76205 11.544 3.06205C11.256 3.35005 10.908 3.49405 10.5 3.49405C10.092 3.49405 9.738 3.35005 9.438 3.06205C9.15 2.76205 9.006 2.40805 9.006 2.00005ZM4.506 2.00005C4.506 1.59205 4.65 1.24405 4.938 0.956048C5.238 0.656048 5.592 0.506048 6 0.506048C6.408 0.506048 6.756 0.656048 7.044 0.956048C7.344 1.24405 7.494 1.59205 7.494 2.00005C7.494 2.40805 7.344 2.76205 7.044 3.06205C6.756 3.35005 6.408 3.49405 6 3.49405C5.592 3.49405 5.238 3.35005 4.938 3.06205C4.65 2.76205 4.506 2.40805 4.506 2.00005ZM0.00600019 2.00005C0.00600019 1.59205 0.15 1.24405 0.438 0.956048C0.738 0.656048 1.092 0.506048 1.5 0.506048C1.908 0.506048 2.256 0.656048 2.544 0.956048C2.844 1.24405 2.994 1.59205 2.994 2.00005C2.994 2.40805 2.844 2.76205 2.544 3.06205C2.256 3.35005 1.908 3.49405 1.5 3.49405C1.092 3.49405 0.738 3.35005 0.438 3.06205C0.15 2.76205 0.00600019 2.40805 0.00600019 2.00005Z'
            />
        </svg>
    );
}
