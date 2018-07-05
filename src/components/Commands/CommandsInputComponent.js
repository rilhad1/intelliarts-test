import React from 'react';
import { connect } from 'react-redux';
import Alert from 'react-s-alert';
import { AlertMessage } from '../AlertMessage/AlertMessage.js';
import { addList, viewList, clearList, viewTotal, baseCurrency } from './../../redux/actions/index.js';
import { Form, Input, Label, ButtonSubmit } from './styles.js';
import multiDispatch from '../../operation/multiDispatch.js';
import { checkDate, ckeckPrice, checkCurrency } from '../../operation/auditData';

class CommandsInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'add 2017-04-25 12 USD Jogurt'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    const { dispatch } = this.props;
    let commandParts = this.state.value.trim().split(' ');
    event.preventDefault();

    switch (commandParts[0]) {
      case 'add':
        if (commandParts.length === 5 &&
          checkDate(commandParts[1]) &&
          ckeckPrice(commandParts[2]) &&
          checkCurrency(commandParts[3])
        ) {
          multiDispatch(
            dispatch,
            addList(commandParts),
            viewList(false),
            viewTotal(false));
          Alert.success(
            <AlertMessage
              message='Product is added'
            />, {
              position: 'top-right',
              effect: 'genie',
              timeout: 2000
            });
        } else {
          Alert.error(
            <AlertMessage
              isLengthCorrect={commandParts.length === 5}
              isDateCorrect={checkDate(commandParts[1])}
              isPriceCorrect={ckeckPrice(commandParts[2])}
              isCurrencyCorrect={checkCurrency(commandParts[3])}
            />, {
              position: 'top-right',
              effect: 'genie',
              timeout: 2000
            });
        };
        break;

      case 'list':
        if (commandParts.length === 1) {
          multiDispatch(
            dispatch,
            viewList(true),
            viewTotal(false));
          Alert.success(
            <AlertMessage
              message='List is visible'
            />, {
              position: 'top-right',
              effect: 'genie',
              timeout: 1500
            });
        } else {
          Alert.error(
            <AlertMessage
              message='Incorrect command'
            />, {
              position: 'top-right',
              effect: 'genie',
              timeout: 2000
            });
        };
        break;

      case 'clear':
        if (commandParts.length === 2 &&
          checkDate(commandParts[1])) {
          multiDispatch(
            dispatch,
            clearList(commandParts[1]),
            viewList(false),
            viewTotal(false));
          Alert.success(
            <AlertMessage
              message='Clear success'
            />, {
              position: 'top-right',
              effect: 'genie',
              timeout: 2000
            });
        } else {
          Alert.error(
            <AlertMessage
              isLengthCorrect={commandParts.length === 2}
              isDateCorrect={checkDate(commandParts[1])}
              isPriceCorrect={true}
              isCurrencyCorrect={true}
            />, {
              position: 'top-right',
              effect: 'genie',
              timeout: 2000
            });
        };
        break;

      case 'total':
        if (commandParts.length === 2 && checkCurrency(commandParts[1])) {
          multiDispatch(
            dispatch,
            baseCurrency(commandParts[1]),
            viewList(false),
            viewTotal(true));
        } else {
          Alert.error(
            <AlertMessage
              isLengthCorrect={commandParts.length === 2}
              isDateCorrect={true}
              isPriceCorrect={true}
              isCurrencyCorrect={checkCurrency(commandParts[1])}
            />, {
              position: 'top-right',
              effect: 'genie',
              timeout: 2000
            });
        };

        break;

      default:
        Alert.error(
          <AlertMessage
            message='Please write correct command'
            isLengthCorrect={commandParts.length === 2}
            isDateCorrect={checkDate(commandParts[1])}
            isPriceCorrect={true}
            isCurrencyCorrect={true}
          />, {
            position: 'top-right',
            effect: 'genie',
            timeout: 2000
          });
    };
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label>
          Enter command:
          <Input type="text" value={this.state.value} onChange={this.handleChange} />
        </Label>
        <ButtonSubmit>Enter</ButtonSubmit>
      </Form>
    );
  };
};

export default connect()(CommandsInput);

