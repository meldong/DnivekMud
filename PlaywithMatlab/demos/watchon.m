function figNumber=watchon
%WATCHON Sets the current figure pointer to the watch.
%   figNumber=WATCHON will set the current figure's pointer
%   to a watch.
%
%   See also WATCHOFF.

%   Ned Gulley, 6-21-93
%   Copyright 1984-2003 The MathWorks, Inc.

% If there are no windows open, just set figNumber to a flag value.
if isempty(get(0,'Children')),
    figNumber=NaN;
else
    figNumber=gcf;
    set(figNumber,'Pointer','watch');
end
