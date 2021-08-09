import React from 'react';
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'
import { ServicesCard, ServicesContainer, ServicesH1, ServicesH2, ServicesIcon, ServicesP, ServicesWrapper } from './ServicesElements'

export const Services = () => {
    return (
        <>
            <ServicesContainer id="services">
                <ServicesH1>Our Services</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={Icon1}></ServicesIcon>
                        <ServicesH2>Reduce Expenses</ServicesH2>
                        <ServicesP>We help reduce your fees and increase overall revenue</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon2}></ServicesIcon>
                        <ServicesH2>Virtual Offices</ServicesH2>
                        <ServicesP>You can access our platforms online anywhere</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon3}></ServicesIcon>
                        <ServicesH2>Premuim benifits</ServicesH2>
                        <ServicesP>Unlock our sepcial membership card that returns extra benifits</ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
            </ServicesContainer>
        </>
    )
}
