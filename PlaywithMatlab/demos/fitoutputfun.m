function stop = fitoutputfun(lambda,optimvalues, state,t,y,handle)
%FITOUTPUT Output function used by FITDEMO

%   Copyright 1984-2004 The MathWorks, Inc. 

stop = false;
% Obtain new values of fitted function at 't'
A = zeros(length(t),length(lambda));
for j = 1:length(lambda)
    A(:,j) = exp(-lambda(j)*t);
end
c = A\y;
z = A*c;

switch state
    case 'init'
        set(handle,'ydata',z)
        drawnow
        title('Input data and fitted function');
    case 'iter'
        set(handle,'ydata',z)
        drawnow
    case 'done'
        hold off;
end
pause(.04)
