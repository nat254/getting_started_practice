import React from 'react';
import { LevelContext } from '../LevelContext';

interface SectionProps {
  level: number;
}

export default function Section({ level, children }: React.PropsWithChildren<SectionProps>){
    return (
        <section className="section">
            <LevelContext.Provider value={level}>
                {children}
            </LevelContext.Provider>
        </section>
    );
};