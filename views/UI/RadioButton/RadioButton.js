
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
});

class RadioButtonsGroup extends React.Component {
  state = {
    value: this.props.default_value,
    content : this.props.content
  };

  handleChange = event => {
    this.props.callback_func(event.target.value)
    this.setState({ value: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <FormControl component="fieldset" required className={classes.formControl}>
          <FormLabel component="legend">{this.props.title}</FormLabel>
          <RadioGroup
            aria-label={this.props.title}
            name={this.props.title}
            className={classes.group}
            value={this.state.value}
            onChange={this.handleChange}
          >

            {this.state.content ? this.state.content.map(option => (
              <FormControlLabel value={option.value} key={option.key} control={<Radio />} label={option.label} />
            )) : null}

         
          </RadioGroup>
        </FormControl>
      </div>
    );
  }
}

RadioButtonsGroup.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RadioButtonsGroup);