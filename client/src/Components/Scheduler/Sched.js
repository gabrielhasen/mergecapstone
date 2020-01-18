import React, { Component } from "react";
import { PropTypes } from "prop-types";
import Scheduler, {
  SchedulerData,
  ViewTypes,
  DATE_FORMAT
} from "react-big-scheduler";
import "react-big-scheduler/lib/css/style.css";
import withDragDropContext from "./withDndContext";
import moment from "moment";
import DemoData from './DemoData';

class Sched extends Component {
  constructor(props) {
    super(props);

    let today = moment().format(DATE_FORMAT);

    let schedulerData = new SchedulerData(
      today,
      ViewTypes.Week,
      false,
      false,
      {
        startResizable: false,
        endResizable: false,
        movable: false,
        creatable: false,
        schedulerWidth: '95%'
      }
    );
    schedulerData.localeMoment.locale("en");
    schedulerData.setResources(DemoData.resources);
    schedulerData.setEvents(DemoData.events);
    this.state = {
      viewModel: schedulerData
    };
  }

  render() {
    const { viewModel } = this.state;
    return (
      <div>
        <div>
          <Scheduler
            schedulerData={viewModel}
            prevClick={this.prevClick}
            nextClick={this.nextClick}
            onSelectDate={this.onSelectDate}
            onViewChange={this.onViewChange}
            toggleExpandFunc={this.toggleExpandFunc}
          />
        </div>
      </div>
    );
  }

  prevClick = schedulerData => {
    schedulerData.prev();
    schedulerData.setEvents(DemoData.events);
    this.setState({
      viewModel: schedulerData
    });
  };

  nextClick = schedulerData => {
    schedulerData.next();
    schedulerData.setEvents(DemoData.events);
    this.setState({
      viewModel: schedulerData
    });
  };

  onViewChange = (schedulerData, view) => {
    schedulerData.setViewType(
      view.viewType,
      view.showAgenda,
      view.isEventPerspective
    );
    schedulerData.setEvents(DemoData.events);
    this.setState({
      viewModel: schedulerData
    });
  };

  onSelectDate = (schedulerData, date) => {
    schedulerData.setDate(date);
    schedulerData.setEvents(DemoData.events);
    this.setState({
      viewModel: schedulerData
    });
  };

  toggleExpandFunc = (schedulerData, slotId) => {
    schedulerData.toggleExpandStatus(slotId);
    this.setState({
      viewModel: schedulerData
    });
  };
}

export default withDragDropContext(Sched);
