% FSBVP  �[�_�ł̕ω���A���ɂ���
%
% Falkner-Skan BVPs �́A���R�ȕ��ʏ�ɔS���A�񈳏k�̑w���̋ߎ����ɋN����
% �Ă��܂��B��́A���̋��E����
%     f(0) = 0, f'(0) = 0, f'(infinity) = 1
%     beta = 0.5
% �������A���̕������ŕ\�킹�܂��B
%         f''' + f*f'' + beta*(1-(f')^2) = 0
% 
% BVP �́A�L���_ 'infinity' �ł̋��E�����̉��ŉ�����܂��B���̒[�_��A��
% �ɂ��邱�Ƃɂ��A'infinity' �̑傫�Ȓl�ɑ΂��āA��������悤�Ɏg���܂��B
% �����āA'infinity' ���\���ɑ傫�������ꍇ�ɐ������̂��錋�ʂ�ۏ؂���
% �悤�ɂ��܂��B'infinity' �̂���l�ɑ΂�����́ABVPINIT ���g���āA���
% �傫�� 'infinity' �ɑ΂��鐄��Ɋg�����܂��B
%
% �Q�l  BVP4C, BVPINIT, FUNCTION_HANDLE.


%   Copyright 1984-2006 The MathWorks, Inc.