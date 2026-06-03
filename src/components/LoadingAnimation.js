'use client';

import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function LoadingAnimation() {
    return (
        <DotLottieReact
            src="/animations/loading.lottie"
            autoplay
            loop
            style={{ width: 350, height: 350 }}
        />
    );
}