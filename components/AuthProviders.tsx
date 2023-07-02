"use client";

import { useEffect, useState } from "react";
import { getProviders, signIn } from "next-auth/react";

type ProviderType = {
    id: string,
    name: string,
    type: string,
    signinUrl: string,
    callbackUrl: string,
    signinUrlParams?: Record<string, string> | null,
};

type Providers = Record<string, string> | null;

const AuthProviders = () => {
    const [providers, setProviders] = useState(null);

    useEffect(() => {
        const fetchProviders = async () => {
            const res: any = await getProviders();
            console.log(res);
            setProviders(res);
        };

        fetchProviders();
    }, []);

    if (providers) {
        return (
            <div>
                {Object.values(providers).map((provider: any, index: number) => (
                    <button key={index} onClick={() => signIn(provider?.id)}>
                        {provider.id}
                    </button>
                ))}
            </div>
        );
    }
};

export default AuthProviders;
