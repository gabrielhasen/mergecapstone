import React, { Component } from "react";
import Scheduler, {
  SchedulerData,
  ViewTypes,
  DATE_FORMAT
} from "react-big-scheduler";
import "react-big-scheduler/lib/css/style.css";
import moment from "moment";

import withDragDropContext from "./components/WithDndContext";
import DemoData from './components/DemoData';

class Calendar extends Component {
  constructor(props) {
    super(props);

    let today = moment().format(DATE_FORMAT);

    let schedulerData = new SchedulerData(
      today,
      ViewTypes.Day,
      false,
      false,
      {
        startResizable: false,
        endResizable: false,
        movable: false,
        creatable: true,
        schedulerWidth: '90%',
        checkConflict: true,
        views : [
          {viewName: 'Day', viewType: ViewTypes.Day, showAgenda: false, isEventPerspective: false},
          {viewName: 'Week', viewType: ViewTypes.Week, showAgenda: false, isEventPerspective: false},
          {viewName: 'Month', viewType: ViewTypes.Month, showAgenda: false, isEventPerspective: false},
        ]
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
          <Scheduler
            schedulerData={viewModel}
            prevClick={this.prevClick}
            nextClick={this.nextClick}
            onSelectDate={this.onSelectDate}
            onViewChange={this.onViewChange}
            newEvent={this.newEvent}
            onScrollLeft={this.onScrollLeft}
            onScrollRight={this.onScrollRight}
            onScrollTop={this.onScrollTop}
            onScrollBottom={this.onScrollBottom}
            toggleExpandFunc={this.toggleExpandFunc}
          />
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

  newEvent = (schedulerData, slotId, slotName, start, end, type, item) => {
    if(schedulerData.viewType === 0) //Allows users to only create events in day view
    {
      console.log(schedulerData)
      // if(window.confirm(`Do you want to create a new event? {slotId: ${slotId}, slotName: ${slotName}, start: ${start}, end: ${end}, type: ${type}, item: ${item}}`)) {
        if(window.confirm(`Create reservation for ${slotName} from ${start} to ${end}?`)) {
        let newFreshId = 0;
        schedulerData.events.forEach((item) => {
          if(item.id >= newFreshId)
          { newFreshId = item.id + 1; }
        });
  
        let newEvent = {
          id: newFreshId,
          title: 'New Event',
          start: start,
          end: end,
          resourceId: slotId,
          bgColor: 'blue'
        }
        schedulerData.addEvent(newEvent);
        this.setState({
          viewModel: schedulerData
        });
      }
    } 
  };

  onScrollRight = (schedulerData, schedulerContent, maxScrollLeft) => {
    schedulerData.next();
    schedulerData.setEvents(DemoData.events);
    this.setState({
      viewModel: schedulerData
    });

    schedulerContent.scrollLeft = maxScrollLeft - 10;
  };

  onScrollLeft = (schedulerData, schedulerContent, maxScrollLeft) => {
    schedulerData.prev();
    schedulerData.setEvents(DemoData.events);
    this.setState({
      viewModel: schedulerData
    });

    schedulerContent.scrollLeft = 10;
  };
}

export default withDragDropContext(Calendar);
