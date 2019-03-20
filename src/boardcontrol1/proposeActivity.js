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
  if(!reportData) reportData = new ReportData('Action description');
  reportData.dataList.push('Develop Board endorsed tax strategy, policy or overarching tax governance statement in consultation with broader business');
}

if(statementtext2 = 0) {
  if(!reportData) reportData = new ReportData('Action description');
  reportData.dataList.push('Review/update documented tax policy/strategy or framework annually');
}

if(statementtext3 <= 0.5) {
  if(!reportData) reportData = new ReportData('Action description');
  reportData.dataList.push('Seek Board (or sub-committee) approval and sign off of tax strategy, policy or overarching tax governance statement');
}

if(statementtext57 < .31) {
  if(!reportData) reportData = new ReportData('Action description');
  reportData.dataList.push('Formally define, document and communicate the tax risk appetite in consultation with the broader business');
}

if(statementtext68 < .61) {
  if(!reportData) reportData = new ReportData('Action description');
  reportData.dataList.push('Consider undertaking a review of underlying accounting and operational systems and their impact on tax risk to expand the tax risk appetite');
}

if(statementtext116 = 0) {
  if(!reportData) reportData = new ReportData('Action description');
  reportData.dataList.push('Develop communication strategy/plan for internal stakeholders');
}

if(statementtext123 = 0) {
  if(!reportData) reportData = new ReportData('Action description');
  reportData.dataList.push('Consider external communication plan for tax strategy, policy or overarching governance statement');
}



if(reportData) {
  text.Output.Append(reportData.toString());
}
