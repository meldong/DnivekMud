% PDEX5  PDEPE �p�̗� 5
%
% ���̗�́A��ᇂɊ֘A������ꕨ�̏����̒i�K�̐��w�I�ȃ��f���ł��B
% PDE �͂��̂悤�ɂȂ�܂��B
%  
%      Dn/Dt = D(d*Dn/Dx - a*n*Dc/Dx)/Dx + s*r*n*(N - n)
%      Dc/Dt = D(Dc/Dx)/Dx + s*(n/(n+1) - c)
%
% PDEPE �Ŋ��҂����^�ŁA�������͂��̂悤�ɂȂ�܂��B
%
%    |1|         |n|      | d*D(n)/Dx - a*n*D(c)/Dx |    |  s*r*n*(N - n) |
%    | | .*  D_  | | = D_ |                         | +  |                |
%    |1|     Dt  |c|   Dx |        D(c)/Dx          |    | s*(n/(n+1) - c |
%
% �Q�l����[1]�̐} 3�� 4 �́A�p�����[�^�l d = 1e-3, a = 3.8, s = 3, 
% r = 0.88, N = 1 �ɑΉ��������̂ł��B 
%
% ���������́A0 <= x <= 1 �ɑ΂��āA�萔����� n = 1, c = 0.5 �̏��
% ���B���`�����͂́A��ԓI�ɕs�ώ��̉��ւ̃V�X�e���̓W�J��\�z���܂��B
% �X�e�b�v�֐��́A���̓W�J���V�~�����[�V�������邽�߂ɁApde �t�@�C�� 
% PDEX5IC �ɏ����l�Ƃ��Đݒ肳��܂��B 
%
% [0,1] �̗����ŁA2 �̉��̃R���|�[�l���g�͗��� 0 �ŁA���̂��߁A�����A
% ����сA�E���̋��E�͂��̂悤�ɂȂ�܂��B
%
%      |0|       |1|     | d*D(n)/Dx - a*n*D(c)/Dx |   |0|
%      | |   +   | | .*  |                         | = | |
%      |0|       |1|     |        D(c)/Dx          |   |0|
%
% ���̒莮���ɂ��ẮA�T�u�֐� PDEX5PDE, PDEX5IC, PDEX5BC ���Q�Ƃ���
% ���������B
%
% �Ɍ��ł̕��z������ɂ́A�������Ԃ̃V�~�����[�V�������K�v�ł��B�܂��A
% c(x,t) �̋Ɍ��ł̕��z�́A��� [0,1] �ŁA������ 0.1% �����ω����܂���B
% ���̂��߂ɁA��r�I���ȃ��b�V���ō\���܂���B
% 
% �Q�l�����F
% [1] M.E. Orme and M.A.J. Chaplain, A mathematical model of the first 
%     steps of tumour-related angiogenesis: capillary sprout formation 
%     and secondary branching, IMA J. of Mathematics Applied in Medicine
%     & Biology, 13 (1996) pp. 73-98.
%
% �Q�l  PDEPE, FUNCTION_HANDLE.


%   Copyright 1984-2006 The MathWorks, Inc.
