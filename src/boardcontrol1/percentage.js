var statementtext1 = report.TableUtils.GetCellValue("1",1,1).Value;
var statementtext2 = report.TableUtils.GetCellValue("2",6,1).Value;
var statementtext3 = report.TableUtils.GetCellValue("3",9,1).Value;
var statementtext57 = report.TableUtils.GetCellValue("57",8,1).Value;
var statementtext68 = report.TableUtils.GetCellValue("68",7,1).Value;
var statementtext116 = report.TableUtils.GetCellValue("116",7,1).Value;
var statementtext123 = report.TableUtils.GetCellValue("123",7,1).Value;
var percentage = (statementtext123 + statementtext116 + statementtext68 + statementtext57 + statementtext3 + statementtext2 + statementtext1) / 7;
percentage = Math.round(percentage*100);
text.Output.Append('<svg viewBox="0 0 36 36" class="circular-chart"><path class="circle-bg" d="M18 2.084a15.915 15.915 0 0 1 0 31.831 15.915 15.915 0 0 1 0-31.83"/><path class="circle" stroke-dasharray="' + percentage + ', 100" d="M18 2.084a15.915 15.915 0 0 1 0 31.831 15.915 15.915 0 0 1 0-31.83"/><text x="18" y="20.35" class="percentage">' + percentage + '%</text></svg>');