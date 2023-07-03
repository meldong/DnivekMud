# Importing libraries
import pandas as pd
import numpy as np
import quantstats as qs
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.linear_model import LinearRegression
import plotly.express as px
import yfinance as yf

# Getting daily returns for 4 different US stocks in the same time window
aapl = qs.utils.download_returns('AAPL')
aapl = aapl.loc['2010-07-01':'2023-02-10']
 
tsla = qs.utils.download_returns('TSLA')
tsla = tsla.loc['2010-07-01':'2023-02-10']
 
dis = qs.utils.download_returns('DIS')
dis = dis.loc['2010-07-01':'2023-02-10']
 
amd = qs.utils.download_returns('AMD')
amd = amd.loc['2010-07-01':'2023-02-10']
