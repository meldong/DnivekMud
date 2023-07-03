import quantstats as qs
qs.extend_pandas()
stock = qs.utils.download_returns('TSLA')
