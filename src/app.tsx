import React from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';

import { Card } from './components/card';
import { Rating } from './components/rating';

import { data } from './data';

export const App = () => {
  const renderItem = ({ item }: { item: typeof data[0] }) => (
    <Card gutterBottom={10} paddingBottom={5} key={item.id}>
      <ImageContainer>
        <ImageBackground source={item.image} />
      </ImageContainer>
      <CardContent>
        <TitleContainer>
          <Title>{item.title}</Title>
          <Rating value={item.rating} count={item.ratingCount} />
        </TitleContainer>
        <SubTitle numberOfLines={1}>{item.subTitle}</SubTitle>
      </CardContent>
    </Card>
  );

  return (
    <SafeAreaView>
      <Container>
        <FlatList data={data} renderItem={renderItem} keyExtractor={item => String(item.id)} />
      </Container>
    </SafeAreaView>
  );
};

export default App;

const TitleContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 5px 0;
`;

const CardContent = styled.View`
  padding: 0 5px;
`;

const Title = styled.Text`
  font-weight: bold;
`;

const SubTitle = styled.Text`
  color: grey;
`;

const Container = styled.View`
  padding: 3px;
`;

const SafeAreaView = styled.SafeAreaView`
  flex: 1;
`;

const ImageContainer = styled.View`
  width: 100%;
  height: 180px;
  background: red;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  overflow: hidden;
`;

const ImageBackground = styled.ImageBackground`
  flex: 1;
  resize-mode: contain;
`;
