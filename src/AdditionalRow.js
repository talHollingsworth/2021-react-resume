import React from 'react';
import { Summary } from './Summary';
import { SkillSets } from './SkillSets';
import { SkillIcons } from './SkillIcons';
import { ProjectRowFxcmPro } from './ProjectRowFxcmPro';
import { ProjectRowHomepageBanners } from './ProjectRowHomepageBanners';
import { ProjectRowMultilingual } from './ProjectRowMultilingual';
import { ProjectRowNewToForexGuide } from './ProjectRowNewToForexGuide';
import { ProjectRowFxcmRatesWidget } from './ProjectRowFxcmRatesWidget';
import { ProjectRowResponsiveTable } from './ProjectRowResponsiveTable';
import { ProjectRowSvgModule } from './ProjectRowSvgModule';
import { CoworkerRecommendGus } from './CoworkerRecommendGus';
import { CoworkerRecommendMonika } from './CoworkerRecommendMonika';
import { ExperienceRowSr } from './ExperienceRowSr';
import { ExperienceRowMid } from './ExperienceRowMid';
import { ExperienceRowJr } from './ExperienceRowJr';
import { Education } from './Education';

export class AdditionalRow extends React.Component {    
    
    render() {        
        return (
            <div>
                <Summary />
                <SkillSets />
                <SkillIcons />
                <ProjectRowFxcmPro />
                <ProjectRowHomepageBanners />
                <ProjectRowMultilingual />
                <ProjectRowNewToForexGuide />
                <ProjectRowFxcmRatesWidget />
                <ProjectRowResponsiveTable />
                <ProjectRowSvgModule />
                <CoworkerRecommendGus />
                <CoworkerRecommendMonika />
                <ExperienceRowSr />
                <ExperienceRowMid />
                <ExperienceRowJr />
                <Education />
            </div>    
        )               
    }    
}