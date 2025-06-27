const fs = require('fs');
const { Command } = require('commander');
const program = new Command();


program
    .name('To Do List')
    .description('CLI todo app')
    .version('0.8.0');

program.command('add')
    .description('Add tasks to your to do list')
    .argument('<str>' , 'Your task')
    .action((str) => {
        const todo = new Object();
        todo.task = str;
        fs.writeFileSync('todo.json', todo.task)
        }
        );

program.parse();