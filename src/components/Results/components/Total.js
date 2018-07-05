import React from 'react';
import { connect } from 'react-redux';
import { CircleLoader } from 'react-spinners';
import { calculationTotal } from '../../../operation/generalExpenses';
import config from '../../../api/config';
import { P } from './styles';

class Total extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sum: null,
    };
  };

  componentDidMount() {
    fetch(`${config.endpoints}/latest?access_key=${config.apiAccessKey}`)
      .then(res => res.json())
      .then(data => {
        if (this.props.list.length > 0) {
          this.setState({
            sum: calculationTotal(
              this.props.baseCurrency,
              this.props.list,
              data.rates
            )
          });
        };
      });
  };

  render() {
    if (this.props.list.length > 0) {
      return (
        <P>{this.state.sum} {this.props.baseCurrency}</P>
      );
    } return <P>List is empty</P >;
  };
};

const mapStateToProps = state => {
  return {
    list: state.list,
    baseCurrency: state.bool.baseCurrency,
  };
};


export default connect(mapStateToProps)(Total);
