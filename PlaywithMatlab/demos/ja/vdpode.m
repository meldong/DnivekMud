% VDPODE   (�傫�� mu �ɑ΂��ăX�e�B�b�t��) van der Pol ���̃p�����[�^��
% 
% MU �� 1000 �̂Ƃ��A�������͐U�����ɘa���A���͔��ɃX�e�B�b�t�ɂȂ�܂��B
% ���̃��~�b�g�T�C�N���ɂ́A���̐������������ƕω����A��肪���ɃX�e�B�b�t��
% �̈�ƁA�X�e�B�b�t�łȂ� (���s�A����) ���Ɍ������ω��̂���̈悪���݂ɂ���܂��B
% ���������́A�����X�e�b�v�T�C�Y�̑I���ɑ΂���e�X�g�̂��߂ɁA�������ω�����
% �̈�ɋ߂��Ȃ��Ă��܂��B
%   
% �T�u�֐� J(T,Y) �́A(T,Y) �ŉ�͓I�Ɍv�Z���� Jacobian �s�� dF/dY ��
% �o�͂��܂��B�f�t�H���g�ŁAODE Suite �̃X�e�B�t�ȃ\���o�́A���l�I�� 
% Jacobian �s����ߎ����܂��B�������AODE Solver �v���p�e�B Jacobian �́A
% �֐� ODESET ���g���āA@vdpJac �ɐݒ肳��A�\���o�[�́AdF/dy �𓾂邽��
% �Ɋ֐����R�[�����܂��B��͓I�� Jacobian �����\���o�[���A�K�������p��
% ����Ȃ��Ă��\���܂��񂪁A�ϕ��̐M�����ƌ��������߂܂��B
% 
%   L. F. Shampine, Evaluation of a test set for stiff ODE solvers, ACM
%   Trans. Math. Soft., 7 (1981) pp. 409-420.
%   
% �Q�l ODE15S, ODE23S, ODE23T, ODE23TB, ODESET, FUNCTION_HANDLE.


%   Copyright 1984-2006 The MathWorks, Inc.
