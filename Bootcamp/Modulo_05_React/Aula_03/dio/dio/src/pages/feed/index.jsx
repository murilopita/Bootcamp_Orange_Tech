
import React from 'react'

import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';
import { Header } from '../../components/Header';
import { 
    Container,
    Column,
    Title,
    TitleHighlight

} from './styles';


const Feed = () => {
    return (<>
        <Header autenticado={true} />
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
                <TitleHighlight># RANKING TOP 5 DA SEMANA</TitleHighlight>
                <UserInfo name='Murilo Pita' percentual={80} image='https://avatars.githubusercontent.com/u/110427235?v=4'/>
                <UserInfo name='Murilo Pita' percentual={65} image='https://avatars.githubusercontent.com/u/110427235?v=4'/>
                <UserInfo name='Murilo Pita' percentual={60} image='https://avatars.githubusercontent.com/u/110427235?v=4'/>
                <UserInfo name='Murilo Pita' percentual={50} image='https://avatars.githubusercontent.com/u/110427235?v=4'/>
                <UserInfo name='Murilo Pita' percentual={20} image='https://avatars.githubusercontent.com/u/110427235?v=4'/>
            </Column>
            
        </Container>
        
    </>)
}

export { Feed };