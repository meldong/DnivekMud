% DDEX1  DDE23 �ɑ΂���� 1
%
% ����́A�x������������ (DDE) �̃V�X�e���̉��̊ȒP�Ȓ莮���A�v�Z�A
% �v���b�g��������� Wille' and Baker �̗�ł��B 
%
% ����������
%
%        y'_1(t) = y_1(t-1)  
%        y'_2(t) = y_1(t-1)+y_2(t-0.2)
%        y'_3(t) = y_2(t)
%
% �́A t <= 0 �ɑ΂��ė��� y_1(t) = 1, y_2(t) = 1, y_3(t) = 1 �Ƃ��� 
% [0, 5] �ŉ����܂��B
%
% lags �́A�x�N�g�� [1, 0.2] �Ƃ��Ďw�肳��A�x�������������̓T�u�֐� 
% DDEX1DE �ɃR�[�h������A�����͊֐� DDEX1HIST �ɂ���ĕ]������܂��B
% �����͒萔�ł��邽�߁A�x�N�g���Ƃ��ė^�����܂��B
%       sol = dde23(@ddex1de,[1, 0.2],ones(3,1),[0, 5]);
%
%   �Q�l �F DDE23, FUNCTION_HANDLE.


%   Copyright 1984-2006 The MathWorks, Inc.
