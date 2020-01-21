const DemoData = {
    resources: [
        {
            id: 'r0',
            name: 'Machine 1',
        },
        {
            id: 'r1',
            name: 'Machine 2',
        },
        {
            id: 'r2',
            name: 'Machine 3',
        },
        {
            id: 'r3',
            name: 'Machine 3',
        },
    ],
    events: [
        {
            id: 10,
            start: '2020-01-01 17:30:00',
            end: '2020-01-01 23:30:00',
            resourceId: 'r1',
            title: 'Recurring tasks every week on Tuesday, Friday',
            rrule: 'FREQ=WEEKLY;DTSTART=20171219T013000Z;BYDAY=TU,FR',
            bgColor: '#c41d1d'
        },
    ],
    eventsForTaskView: [
        {
            id: 10,
            start: '2017-12-26 18:30:00',
            end: '2017-12-26 23:30:00',
            resourceId: 'r2',
            title: 'R2 has many tasks',
            groupId: 4,
            groupName: 'Task4'
        },
    ],
}

export default DemoData