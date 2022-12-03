import { FiThumbsUp } from 'react-icons/fi';

import React from 'react'

import {
    CardContainer,
    ImageBackground,
    Content,
    UserInfo,
    UserPicture,
    PostInfo,
    HasInfo,
} from './styles';

const Card = () => {
  return (
    <CardContainer>
        <ImageBackground src='https://github.com/murilopita/nlw-esports-explorer/blob/main/img/bg4.jpg?raw=true'/>
        <Content>
            <UserInfo>
                <UserPicture src='https://avatars.githubusercontent.com/u/110427235?v=4' />
                <div>
                    <h4> Murilo Pita</h4>
                    <p>Há 8 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para curso de HTML e CSS</h4>
                <p>Projeto feito no curso de HTML e CSS no bootcamp da dio do Global avanade...<strong>Saiba Mais</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #JAavaScript</h4>
                <p>
                    <FiThumbsUp />10
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}

export { Card }
