import React from 'react';

export default function Section({ children }: React.PropsWithChildren<{}>){
    return (
        <section className="section">
            {children}
        </section>
    );
};