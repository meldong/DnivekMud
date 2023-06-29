%% Nested Functions
% This example shows how to use nested functions to easily share data, as
% well as for creating customized functions.

% Copyright 1984-2011 The MathWorks, Inc.


%% Example 1: Sharing Data
% Let's first take a look at |taxDemo.m|, which contains a nested function.

type taxDemo.m

%%
% The nested function |computeTax| can see the variables in the parent
% function's workspace. This makes sharing of data between multiple nested
% functions easy and particularly useful when processing large data sets.
% We can call the function in the usual way.
y=taxDemo(80e3) % What is the tax on $80k income?

%%
% For nested functions, the |end| statement is required at the end of a
% function. You can also nest functions to any level.

%% Example 2: Creating Customized Functions
% Nested functions allow the ability to create customized functions. Let's
% look at |makefcn.m| which contains a nested function.
type makefcn.m

%%
% When you call |makefcn|, it returns a function handle to a customized
% function. For example:
f = makefcn(3,2,10); 
g = makefcn(0,5,25);

%%
% |f| and |g| are handles to two functions, each with different
% coefficients. We can evaluate the functions by using their function
% handles and passing in parameters.

y=f(2)
%%
y=g(2)

%%
% We can also pass the handle to function functions, such as optimization
% or integration.
minimum=fminbnd(f,-5,5);

%%
% Or plot the function over a range.

ezplot(f);                             % Plot f over a range of x
hold on;
plot(2,f(2),'d');                      % Plot a marker at (2,f(2))
plot(minimum,f(minimum),'s');          % Plot at minimum of f
text(minimum,f(minimum)-2,'Minimum');
h=ezplot(g); set(h,'color','red')      % Plot g over a range of x
plot(2,g(2),'rd');                     % Plot a marker at (2,g(2))
hold off;

%% Example 3: Creating Customized Functions with State
% Let's look at |makecounter.m| which contains a nested function.
type makecounter.m

%%
% When you call |makecounter|, it returns a handle to its nested function
% |getCounter|. |getCounter| is customized by the value of initvalue, a
% variable it can see via nesting within the workspace of makecounter.

counter1 = makecounter(0);  % Define counter initialized to 0
counter2 = makecounter(10); % Define counter initialized to 10

%%
% Here we have created two customized counters: one that starts at 0 and
% one that starts at 10. Each handle is a separate instance of the function
% and its calling workspace. Now we can call the inner nested function via
% its handle. |counter1| does not take parameters, but it could.

counter1Value=counter1()

%% 
% We can call the two functions independently as there are two separate
% workspaces for the parent functions kept. They remain in memory while the
% handles to their nested functions exist.  In this case the |currentCount|
% variable gets updated when counter1 is called.

counter1Value=counter1()
%%
counter2Value=counter2()


displayEndOfDemoMessage(mfilename)