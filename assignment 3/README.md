# MVC

### Model-Views-Controller 
The application and its development are divided into three interconnected parts.

- Model:  Model represents the structure of data, the format and the constraints with which it is stored. It maintains the data of the application. Essentially, it is the database part of the application.

- View: View is what is presented to the user. Views utilize the Model and present data in a form in which the user wants. A user can also be allowed to make changes to the data presented to the user. They consist of static and dynamic pages which are rendered or sent to the user when the user requests them.

- Controller: Controller controls the requests of the user and then generates appropriate response which is fed to the viewer. Typically, the user interacts with the View, which in turn generates the appropriate request, this request will be handled by a controller. The controller renders the appropriate view with the model data as a response.

### MVC Architecture

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/MVC-Process.svg/800px-MVC-Process.svg.png" alt="MVC Model" width="250" height="300">

### Advantages

- Faster Development Process
- Ability To Provide Multiple Views
- Support For Asynchronous Technique
- Modification Does Not Affect The Entire Model
- MVC Model Returns The Data Without Formatting
- SEO Friendly Development Platform



# Debugging in NodeJS

Debugging is a process of rectification and fixing of code so as to make it work in the intended manner. A programmer should be doing this all the time.

The most important principle is the process of elimination. The more you can eliminate, the fewer places to examine. Elimination could included (i) Systematically commenting or disabling blocks of code, (ii) Testing a different part of the system that has similarities to the first, (iii) Using input that has worked before, and changing that input one piece at a time until the problem exhibits.

## Using REPL and console
REPL stands for Read Eval Print Loop -- a way to write JavaScript interactively. To get REPL, open browser and pull up JavaScript console and you have REPL. In node, run `$ node` without any arguments

## Using Node’s built in debugger
- `node debug filename.js`
- You will see the debugger running on its default port 5858.
- These are naïve ways of debugging and generally debugging is done using VSCode’s debugger.

## nodemon

