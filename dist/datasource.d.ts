/// <reference path="../node_modules/grafana-sdk-mocks/app/headers/common.d.ts" />
import * as Druid from 'druid.d';
export default class DruidDatasource {
    id: number;
    name: string;
    url: string;
    q: any;
    backendSrv: any;
    templateSrv: any;
    basicAuth: any;
    supportMetrics: any;
    periodGranularity: any;
    GRANULARITIES: any[][];
    filterTemplateExpanders: {
        "selector": string[];
        "array": string[];
        "regex": string[];
        "javascript": string[];
        "search": any[];
    };
    scopedVars: any;
    constructor(instanceSettings: any, $q: any, backendSrv: any, templateSrv: any);
    query(options: any): any;
    applyMultiplier(aggregator: any, types: any, data: any, panelId: any): void;
    doQuery(from: any, to: any, granularity: any, target: any, panelId: any): any;
    splitArrayFields(aggregator: any): any;
    selectQuery(datasource: string, intervals: Array<string>, granularity: Druid.Granularity, dimensions: Array<string | Object>, metric: Array<string | Object>, filters: Array<Druid.DruidFilter>, selectThreshold: Object, panelId: number): any;
    timeSeriesQuery(datasource: string, intervals: Array<string>, granularity: Druid.Granularity, filters: Array<Druid.DruidFilter>, aggregators: Object, postAggregators: Object, panelId: number): any;
    topNQuery(datasource: string, intervals: Array<string>, granularity: Druid.Granularity, filters: Array<Druid.DruidFilter>, aggregators: Object, postAggregators: Object, threshold: number, metric: string | Object, dimension: string | Object, panelId: number): any;
    groupByQuery(datasource: string, intervals: Array<string>, granularity: Druid.Granularity, filters: Array<Druid.DruidFilter>, aggregators: Object, postAggregators: Object, groupBy: Array<string>, limitSpec: Druid.LimitSpec, panelId: number): any;
    druidQuery(query: Druid.AbstractDruidQuery): any;
    getLimitSpec(limitNum: any, orderBy: any, panelId: any): {
        "type": string;
        "limit": any;
        "columns": any;
    };
    humanizeVariable(varName: any, id: any): any;
    metricFindQuery(query: any): any;
    testDatasource(): any;
    getDataSources(): any;
    getDimensionsAndMetrics(datasource: any): any;
    getFilterValues(target: any, panelRange: any, query: any, panelId: any): any;
    get(relativeUrl: any, params?: any): any;
    buildFilterTree(filters: any, panelId: any): Druid.DruidFilter;
    getQueryIntervals(from: any, to: any): string[];
    getMetricNames(aggregators: any, postAggregators: any): any;
    formatTimestamp(ts: any): number;
    convertTimeSeriesData(md: any, metrics: any): any;
    getGroupName(groupBy: any, metric: any): any;
    convertTopNData(md: any, dimension: any, metric: any): any;
    convertGroupByDataAsTable(md: any, groupBy: any, metrics: any): any[];
    convertGroupByData(md: any, groupBy: any, metrics: any): any;
    convertSelectData(data: any): any;
    dateToMoment(date: any, roundUp: any): any;
    computeGranularity(from: any, to: any, maxDataPoints: any): any;
    roundUpStartTime(from: any, granularity: any): any;
    replaceTemplateValues(obj: any, attrList: any, panelId: any): any;
    replaceTemplateValuesNum(val: any, panelId: any): any;
}
