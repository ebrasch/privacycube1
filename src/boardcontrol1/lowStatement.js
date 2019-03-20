var statementtext1 = report.TableUtils.GetCellValue("1",1,1).Value;
var statementtext2 = report.TableUtils.GetCellValue("2",6,1).Value;
var statementtext3 = report.TableUtils.GetCellValue("3",9,1).Value;
var statementtext57 = report.TableUtils.GetCellValue("57",8,1).Value;
var statementtext68 = report.TableUtils.GetCellValue("68",7,1).Value;
var statementtext116 = report.TableUtils.GetCellValue("116",7,1).Value;
var statementtext123 = report.TableUtils.GetCellValue("123",7,1).Value;

// ReportData Creator
function ReportData(title, dataList) {
  this.title = title;
    this.dataList = dataList && dataList.length ? dataList : [];
}
ReportData.prototype.toString = function() {
    var dataListOutput = '<ul class="report-data__dataList">';
    for(var i = 0; this.dataList.length > i; i++) {
      dataListOutput += '<li>' + this.dataList[i] + '</li>';
    }
    dataListOutput += '</ul>';
  return '<div class="report-data">' + '<h4 class="report-data__title">' + this.title + '</h4>' + dataListOutput + '</div>';
}

// Generating output
var reportData = null;

// Determine data list
if(statementtext1 = 0) {
  if(!reportData) reportData = new ReportData('Areas of lower maturity');
  reportData.dataList.push('No documented tax strategy, policy or overarching tax governance statement');
}

if(statementtext2 = 0) {
  if(!reportData) reportData = new ReportData('Areas of lower maturity');
  reportData.dataList.push('Tax strategy, policy or overarching tax governance statement reviewed less frequently than annually');
}

if(statementtext3 <= 0.5) {
  if(!reportData) reportData = new ReportData('Areas of lower maturity');
  reportData.dataList.push('Tax strategy, policy or overarching tax governance statement is not signed  approved by the Board or sub-committee');
}

if(statementtext57 < .31) if (statementtext57 > .01) {
  if(!reportData) reportData = new ReportData('Areas of lower maturity');
  reportData.dataList.push('Tax Risk Appetite is considered but not documented');
}

if(statementtext57 = 0) {
  if(!reportData) reportData = new ReportData('Areas of lower maturity');
  reportData.dataList.push('Tax Risk Appetite has not been formally defined or documented');
}

if(statementtext68 < .61) {
  if(!reportData) reportData = new ReportData('Areas of lower maturity');
  reportData.dataList.push('A tax risk appetite has not been set in respect of day-to-day operations and underlying systems');
}

if(statementtext116 = 0) {
  if(!reportData) reportData = new ReportData('Areas of lower maturity');
  reportData.dataList.push('A tax risk appetite has not been set in respect of day-to-day operations and underlying systems');
}

if(statementtext123 = 0) {
  if(!reportData) reportData = new ReportData('Areas of lower maturity');
  reportData.dataList.push('Tax policy is not published externally');
}



if(reportData) {
  text.Output.Append(reportData.toString());
}
