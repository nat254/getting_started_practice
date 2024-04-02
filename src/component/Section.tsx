import React, { useContext } from 'react';
import { LevelContext } from '../LevelContext';

// interface SectionProps {
//   level: number;
// }

export default function Section({children }: React.PropsWithChildren<{}>){
    const level = useContext(LevelContext);
    return (
        <section className="section">
            <LevelContext.Provider value={level + 1}>
                {children}
            </LevelContext.Provider>
        </section>
    );
};