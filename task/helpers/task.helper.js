var taskRunner;

function Task(name, dependencies, func) {
    this.name = name;
    this.dependencies = dependencies;
    this.func = func
}

Task.prototype.getName = function() {
    return this.name;
};

Task.prototype.addTo = function(gulp) {
    gulp.task(
        this.name,
        this.dependencies,
        this.func
    );
};

Task.to = function(tr) {
    taskRunner = tr;
    return Task;
};

Task.addTask = function(task) {
    taskRunner.task(
        task.name,
        task.dependencies,
        task.func
    );
    return Task;
};

module.exports = Task;
