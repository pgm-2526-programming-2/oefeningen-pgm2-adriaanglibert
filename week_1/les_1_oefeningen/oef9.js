const todoList = [
    {
        task: "Complete Project",
        subtasks: [
            {
                task: "Write Code",
                subtasks: [
                    { task: "Implement Feature A" },
                    { task: "Test Feature A" },
                    { task: "Refactor Code" },
                ],
            },
            {
                task: "Document Project",
                subtasks: [{ task: "Write Readme" }, { task: "Create Documentation" }],
            },
        ],
    },
    {
        task: "Prepare Presentation",
        subtasks: [{ task: "Create Slides" }, { task: "Practice Delivery" }],
    },
];

function showTasks(items) {
    items.forEach(item => {
        console.log('- ', item.task);

        if (item.subtasks === undefined || !item.subtasks.length) {
            return;
        }

        showTasks(item.subtasks);
    });
}

showTasks(todoList);