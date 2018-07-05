import React from 'react';
import { connect } from 'react-redux';
import Total from './components/Total';
import ListDate from './components/ListDate';
import { Container, UlDate } from './styles';

const Results = ({ data, bool }) => (
  <Container>
    {
      bool.isListVisible &&
      <UlDate>
        {
          data.sort(sortByDate).map(item => (
            <ListDate data={item} key={item[0]} />
          ))
        }
      </UlDate>
    }
    {
      bool.viewTotal && <Total />
    }
  </Container>
);

const sortByDate = (a, b) => {
  a = new Date(a[0]).getTime();
  b = new Date(b[0]).getTime();
  return b < a ? 1 : -1;
};

const mapStateToProps = state => {
  return {
    data: state.list,
    bool: state.bool,
  };
};

export default connect(mapStateToProps)(Results);


