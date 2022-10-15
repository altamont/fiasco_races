table_event_analysis_list = function (table_name) {
    $(document).ready(function () {
        buildColumnChooser(table_name);
        table[table_name] = $('#' + table_name).DataTable({
            "ajax": "api3.php?do=analysis_event_list&zwift_event_id=" + ZP_VARS.zwift_event_id,
            "initComplete": function (settings, json) {
            },
            "columns": [{
                data: "date", render: function (data, type, row, obj) {
                    if (type != "display")
                        return data;
                    if (!data)
                        return '-';
                    str = getRelativeDate(data, ZP_VARS.timezone_offset, !0);
                    label = getGridLabel(str);
                    str = '<span class="text-' + label + '"> ' + str + ' </span>';
                    return str
                }, className: 'text-right text-nowrap', "orderSequence": ["asc", "desc"],
            }, {
                data: "date", render: function (data, type, row, obj) {
                    if (type != "display")
                        return data;
                    if (!data)
                        return '';
                    str = ZP_DATA_get_TIME_FROM_DATE(data, type, row, obj);
                    return str
                }, className: 'text-right text-nowrap', orderable: !1,
            }, {
                data: "name", render: function (data, type, row, obj) {
                    if (type != "display")
                        return data;
                    if (!data)
                        return '';
                    str = ZP_DATA_get_NAME(data, type, row, obj);
                    return str
                }, className: 'text-left text-nowrap athlete_col',
            }, {
                data: "name1", render: function (data, type, row, obj) {
                    if (type != "display")
                        return data;
                    if (!data)
                        return '';
                    str = '<b>' + row.name1 + '</b>';
                    if (row.name2)
                        str += '<BR>' + '<b>' + row.name2 + '</b>';
                    if (row.name3)
                        str += '<BR>' + '<b>' + row.name3 + '</b>';
                    if (row.name4)
                        str += '<BR>' + '<b>' + row.name4 + '</b>';
                    return str
                }, className: 'text-left text-nowrap padright32', orderable: !1,
            }, {
                data: "power5", render: function (data, type, row, obj) {
                    if (type != "display")
                        return data;
                    if (!data)
                        return '';
                    if (!data[0])
                        return '';
                    str = '';
                    len = data.length;
                    for (i = 0; i < len; i++) {
                        if (i)
                            str += '<BR>'; else d1 = data[i];
                        if (typeof (ZP_VARS.view_analysis_type) !== 'undefined' && ZP_VARS.view_analysis_type == 1) {
                            str += get_analysis_perc(data[i], d1, i)
                        } else str += data[i] + '<rsmall>w</rsmall>'
                    }
                    return str
                }, className: 'text-right text-nowrap padright32', orderable: !1,
            }, {
                data: "power15", render: function (data, type, row, obj) {
                    if (type != "display")
                        return data;
                    if (!data)
                        return '';
                    if (!data[0])
                        return '';
                    str = '';
                    len = data.length;
                    for (i = 0; i < len; i++) {
                        if (i)
                            str += '<BR>'; else d1 = data[i];
                        if (typeof (ZP_VARS.view_analysis_type) !== 'undefined' && ZP_VARS.view_analysis_type == 1) {
                            str += get_analysis_perc(data[i], d1, i)
                        } else str += data[i] + '<rsmall>w</rsmall>'
                    }
                    return str
                }, className: 'text-right text-nowrap padright32', orderable: !1,
            }, {
                data: "power60", render: function (data, type, row, obj) {
                    if (type != "display")
                        return data;
                    if (!data)
                        return '';
                    if (!data[0])
                        return '';
                    len = data.length;
                    str = '';
                    for (i = 0; i < len; i++) {
                        if (i)
                            str += '<BR>'; else d1 = data[i];
                        if (typeof (ZP_VARS.view_analysis_type) !== 'undefined' && ZP_VARS.view_analysis_type == 1) {
                            str += get_analysis_perc(data[i], d1, i)
                        } else str += data[i] + '<rsmall>w</rsmall>'
                    }
                    return str
                }, className: 'text-right text-nowrap padright32', orderable: !1,
            }, {
                data: "power300", render: function (data, type, row, obj) {
                    if (type != "display")
                        return data;
                    if (!data)
                        return '';
                    if (!data[0])
                        return '';
                    len = data.length;
                    str = '';
                    for (i = 0; i < len; i++) {
                        if (i)
                            str += '<BR>'; else d1 = data[i];
                        if (typeof (ZP_VARS.view_analysis_type) !== 'undefined' && ZP_VARS.view_analysis_type == 1) {
                            str += get_analysis_perc(data[i], d1, i)
                        } else str += data[i] + '<rsmall>w</rsmall>'
                    }
                    return str
                }, className: 'text-right text-nowrap padright32', orderable: !1,
            }, {
                data: "power1200", render: function (data, type, row, obj) {
                    if (type != "display")
                        return data;
                    if (!data)
                        return '';
                    if (!data[0])
                        return '';
                    str = '';
                    len = data.length;
                    for (i = 0; i < len; i++) {
                        if (i)
                            str += '<BR>'; else d1 = data[i];
                        if (typeof (ZP_VARS.view_analysis_type) !== 'undefined' && ZP_VARS.view_analysis_type == 1) {
                            str += get_analysis_perc(data[i], d1, i)
                        } else str += data[i] + '<rsmall>w</rsmall>'
                    }
                    return str
                }, className: 'text-right text-nowrap padright32', orderable: !1,
            }, {
                data: "name", render: function (data, type, row, obj) {
                    data = data.escapeHtml();
                    if (type != "display")
                        return data;
                    if (!data)
                        return '';
                    row.profile_link = str = "<a href='analysis.php?set_id=" + row.set_id + "'>View complete data</a>"
                    return str
                }, orderable: !1, className: 'text-left text-nowrap',
            }, {
                data: "zero", render: function (data, type, row, obj) {
                    if (type != "display")
                        return data;
                    if (!data)
                        return '';
                    str = '';
                    len = data.length;
                    for (i = 0; i < len; i++) {
                        if (i)
                            str += '<BR>';
                        if (data[i])
                            str += data[i] + '<rsmall>s</rsmall>'
                    }
                    return str
                }, orderable: !1, className: 'text-right text-nowrap padright24',
            }, {
                data: "missing", render: function (data, type, row, obj) {
                    if (type != "display")
                        return data;
                    if (!data)
                        return '';
                    str = '';
                    len = data.length;
                    for (i = 0; i < len; i++) {
                        if (i)
                            str += '<BR>';
                        if (data[i])
                            str += data[i] + '<rsmall>s</rsmall>'
                    }
                    return str
                }, orderable: !1, className: 'text-right text-nowrap padright24',
            },],
            "paging": !0,
            "pageLength": 50,
            "lengthChange": !1,
            "searching": !0,
            "deferRender": !0,
            "sDom": "frtip",
            "order": [[0, "desc"]],
            "autoWidth": !1,
            "info": !0,
            "ordering": !0,
        });
        updateColumnChooser(table_name)
    })
};
table_event_comments = function (table_name) {
    $(document).ready(function () {
        table[table_name] = $('#' + table_name).DataTable({
            "language": {
                "emptyTable": "No comments found",
                "info": "Showing comments page _PAGE_ of _PAGES_",
                "infoEmpty": "No comments available",
                "infoFiltered": "(filtered from _MAX_ total comments)"
            },
            "ajax": "api3.php?do=event_comments&zid=" + ZP_VARS.zwift_event_id,
            "columns": [{
                data: "id",
                render: function (data, type, row, obj) {
                    if (type != "display")
                        return data;
                    str = '#' + data;
                    return str
                },
                className: 'valign_top text-right text-nowrap width_compact',
                "orderable": !0,
                "orderSequence": ["asc", "desc"],
            }, {
                data: "name", render: function (data, type, row, obj) {
                    str = ZP_DATA_get_NAME(data, type, row, obj);
                    str += '<BR>' + row.comment;
                    return str
                }, className: 'text-left athlete_col', "orderSequence": ["asc", "desc"], "orderable": !1,
            }, {
                data: "tm",
                render: function (data, type, row, obj) {
                    str = ZP_DATA_get_DATE(data, type, row, obj);
                    str += ' ' + ZP_DATA_get_TIME_FROM_DATE(data, type, row, obj);
                    return str
                },
                className: 'valign_top text-right text-nowrap width_compact',
                "orderable": !1,
                "orderSequence": ["asc", "desc"],
            }, {
                data: "pid", render: function (data, type, row) {
                    if (type != "display")
                        return '';
                    if (ZP_VARS.zid != row.zwid)
                        return '';
                    str = '<a class="text-blue" href="posting.php?mode=edit&f=' + row.fid + '&p=' + row.pid + '">Edit</a> ';
                    return str
                }, className: 'text-right text-nowrap', "orderable": !1,
            }, {
                data: "pid", render: function (data, type, row) {
                    if (type != "display")
                        return '';
                    if (ZP_VARS.zid != row.zwid)
                        return '';
                    str = '<a class="text-red" href="posting.php?mode=soft_delete&f=' + row.fid + '&p=' + row.pid + '">Delete</a> ';
                    return str
                }, className: 'text-right text-nowrap', "orderable": !1,
            },],
            "oLanguage": {"sZeroRecords": "No comments found."},
            "paging": !0,
            "pageLength": -1,
            "searching": !0,
            "deferRender": !0,
            "lengthMenu": [[10, 50, -1], [10, 50, "All"]],
            "order": [[0, "asc"]],
            "autoWidth": !1,
            "lengthChange": !0,
            "sDom": "f",
            "info": !0,
            "ordering": !0,
        })
    })
};
table_event_sprints = function (table_name, grouping) {
    if (typeof (grouping) == 'undefined')
        grouping = !1;
    $(document).ready(function () {
        table_event_sprints_columns = [                    
            { 
                data: "label", 
                render: ZP_DATA_get_ZWIFT_CATEGORY,
                className: 'text-left text-nowrap padright24',
                type: 'non-empty-string', 
            },
            { 
                data: "pos",
                className: 'text-left text-nowrap padright24',
                type: 'non-empty-string', 
            },
            { 
                data: "name",
                render: ZP_DATA_get_NAME,
                className: 'text-left text-nowrap athlete_col',
                type: 'non-empty-string', 
            }
        ];

        $.each(ZP_VARS.sprint, function( index, value ) {                            
            table_event_sprints_columns.push({ 
                data: "s" + index,
                render: ZP_DATA_get_SPRINT,
                className: 'text-left text-nowrap padright24',
                "orderSequence": [ "asc", "desc"],
                type: 'non-empty-string',
                visible: typeof(ZP_VARS.sprint[index])!=='undefined' ? true : false,
            });            
          });

        table_event_sprints_columns.push({ 
            data: "power_type",
            render: ZP_DATA_get_POWER_TYPE,
            className: 'text-right text-nowrap padright24',
            "orderSequence": [ "desc", "asc"],
            type: 'non-empty-string',                         
        });
        table[table_name] = $('#' + table_name).DataTable({
            "ajax": {"url": "api3.php?do=event_sprints&zid=" + ZP_VARS.zwift_event_id,},
            select: !0,
            "columns": table_event_sprints_columns,
            "paging": !0,
            "pageLength": 100,
            "lengthChange": !1,
            "searching": !0,
            "deferRender": !0,
            "order": [[0, "asc"], [1, "asc"]],
            "autoWidth": !1,
            "oLanguage": {"sZeroRecords": "No sprint or KOM data available for this event."},
            "info": !1,
            "ordering": !0,
            "drawCallback": function (settings) {
                var api = this.api();
                if (typeof (table[table_name]) == 'undefined')
                    return;
                if (!table[table_name].order())
                    return;
                if (ZP_VARS.event_type > 0)
                    return;
                if (grouping)
                    return;
                var rows = api.rows({page: 'current'}).nodes();
                var last = null;
                var last_i = 0;
                api.column(0, {page: 'current'}).data().each(function (group, i) {
                    var currentOrder = table[table_name].order()[0];
                    if (currentOrder[0] == 0)
                        if (last !== group) {
                            if (i) {
                                $(rows).eq(i).before('<tr class="group" style="height:20px;background-color:#efefef;"><td colspan=10"></td></tr>')
                            }
                            last = group;
                            last_i = 0
                        }
                })
            }
        })
    })
};
table_event_primes = function (table_name, grouping) {
    if (typeof (grouping) == 'undefined')
        grouping = !1;
    $(document).ready(function () {
        table[table_name] = $('#' + table_name).DataTable({
            "ajax": {"url": "api3.php?do=event_primes&zid=" + ZP_VARS.zwift_event_id,},
            select: !0,
            "columns": [{
                data: "lap",
                className: 'text-left text-nowrap padright24',
                type: 'non-empty-string',
            }, {
                data: "id",
                className: 'text-left text-nowrap padright24',
                type: 'non-empty-string',
                visible: !1,
            }, {
                data: "name",
                render: ZP_DATA_get_NAME,
                className: 'text-left text-nowrap padright24',
                type: 'non-empty-string',
            }, {
                data: "rider_1",
                className: 'text-left text-nowrap ',
                type: 'non-empty-string',
                render: function (data, type, row, obj) {
                    if (typeof (row.rider_1) == 'undefined')
                        return '';
                    str = ZP_DATA_get_NAME(row.rider_1.name, type, row.rider_1, obj);
                    return str
                },
                orderable: !1,
            }, {
                data: "rider_1",
                className: 'text-left text-nowrap ',
                type: 'non-empty-string',
                render: function (data, type, row) {
                    if (typeof (row.rider_1) == 'undefined')
                        return '';
                    str = ZP_DATA_get_PRIME_TIME(row.rider_1);
                    return str
                },
                orderable: !1,
            }, {
                data: "rider_2",
                className: 'text-left text-nowrap ',
                type: 'non-empty-string',
                render: function (data, type, row, obj) {
                    if (typeof (row.rider_2) == 'undefined')
                        return '';
                    str = ZP_DATA_get_NAME(row.rider_2.name, type, row.rider_2, obj);
                    return str
                },
                orderable: !1,
            }, {
                data: "rider_2",
                className: 'text-left text-nowrap ',
                type: 'non-empty-string',
                render: function (data, type, row) {
                    if (typeof (row.rider_2) == 'undefined')
                        return '';
                    str = ZP_DATA_get_PRIME_TIME(row.rider_2);
                    return str
                },
                orderable: !1,
            }, {
                data: "rider_3",
                className: 'text-left text-nowrap ',
                type: 'non-empty-string',
                render: function (data, type, row, obj) {
                    if (typeof (row.rider_3) == 'undefined')
                        return '';
                    str = ZP_DATA_get_NAME(row.rider_3.name, type, row.rider_3, obj);
                    return str
                },
                orderable: !1,
            }, {
                data: "rider_3",
                className: 'text-left text-nowrap ',
                type: 'non-empty-string',
                render: function (data, type, row) {
                    if (typeof (row.rider_3) == 'undefined')
                        return '';
                    str = ZP_DATA_get_PRIME_TIME(row.rider_3);
                    return str
                },
                orderable: !1,
            }, {
                data: "rider_4",
                className: 'text-left text-nowrap ',
                type: 'non-empty-string',
                render: function (data, type, row, obj) {
                    if (typeof (row.rider_4) == 'undefined')
                        return '';
                    str = ZP_DATA_get_NAME(row.rider_4.name, type, row.rider_4, obj);
                    return str
                },
                orderable: !1,
            }, {
                data: "rider_4",
                className: 'text-left text-nowrap ',
                type: 'non-empty-string',
                render: function (data, type, row) {
                    if (typeof (row.rider_4) == 'undefined')
                        return '';
                    str = ZP_DATA_get_PRIME_TIME(row.rider_4);
                    return str
                },
                orderable: !1,
            }, {
                data: "rider_5",
                className: 'text-left text-nowrap',
                type: 'non-empty-string',
                render: function (data, type, row, obj) {
                    if (typeof (row.rider_5) == 'undefined')
                        return '';
                    str = ZP_DATA_get_NAME(row.rider_5.name, type, row.rider_5, obj);
                    return str
                },
                orderable: !1,
            }, {
                data: "rider_5",
                className: 'text-left text-nowrap ',
                type: 'non-empty-string',
                render: function (data, type, row) {
                    if (typeof (row.rider_5) == 'undefined')
                        return '';
                    str = ZP_DATA_get_PRIME_TIME(row.rider_5);
                    return str
                },
                orderable: !1,
            }, {
                data: "rider_6",
                className: 'text-left text-nowrap',
                type: 'non-empty-string',
                render: function (data, type, row, obj) {
                    if (typeof (row.rider_6) == 'undefined')
                        return '';
                    str = ZP_DATA_get_NAME(row.rider_6.name, type, row.rider_6, obj);
                    return str
                },
                orderable: !1,
            }, {
                data: "rider_6",
                className: 'text-left text-nowrap ',
                type: 'non-empty-string',
                render: function (data, type, row) {
                    if (typeof (row.rider_6) == 'undefined')
                        return '';
                    str = ZP_DATA_get_PRIME_TIME(row.rider_6);
                    return str
                },
                orderable: !1,
            }, {
                data: "rider_7",
                className: 'text-left text-nowrap',
                type: 'non-empty-string',
                render: function (data, type, row, obj) {
                    if (typeof (row.rider_7) == 'undefined')
                        return '';
                    str = ZP_DATA_get_NAME(row.rider_7.name, type, row.rider_7, obj);
                    return str
                },
                orderable: !1,
            }, {
                data: "rider_7",
                className: 'text-left text-nowrap ',
                type: 'non-empty-string',
                render: function (data, type, row) {
                    if (typeof (row.rider_7) == 'undefined')
                        return '';
                    str = ZP_DATA_get_PRIME_TIME(row.rider_7);
                    return str
                },
                orderable: !1,
            }, {
                data: "rider_8",
                className: 'text-left text-nowrap',
                type: 'non-empty-string',
                render: function (data, type, row, obj) {
                    if (typeof (row.rider_8) == 'undefined')
                        return '';
                    str = ZP_DATA_get_NAME(row.rider_8.name, type, row.rider_8, obj);
                    return str
                },
                orderable: !1,
            }, {
                data: "rider_8",
                className: 'text-left text-nowrap ',
                type: 'non-empty-string',
                render: function (data, type, row) {
                    if (typeof (row.rider_8) == 'undefined')
                        return '';
                    str = ZP_DATA_get_PRIME_TIME(row.rider_8);
                    return str
                },
                orderable: !1,
            }, {
                data: "rider_9",
                className: 'text-left text-nowrap',
                type: 'non-empty-string',
                render: function (data, type, row, obj) {
                    if (typeof (row.rider_9) == 'undefined')
                        return '';
                    str = ZP_DATA_get_NAME(row.rider_9.name, type, row.rider_9, obj);
                    return str
                },
                orderable: !1,
            }, {
                data: "rider_9",
                className: 'text-left text-nowrap ',
                type: 'non-empty-string',
                render: function (data, type, row) {
                    if (typeof (row.rider_9) == 'undefined')
                        return '';
                    str = ZP_DATA_get_PRIME_TIME(row.rider_9);
                    return str
                },
                orderable: !1,
            }, {
                data: "rider_10",
                className: 'text-left text-nowrap',
                type: 'non-empty-string',
                render: function (data, type, row, obj) {
                    if (typeof (row.rider_10) == 'undefined')
                        return '';
                    str = ZP_DATA_get_NAME(row.rider_10.name, type, row.rider_10, obj);
                    return str
                },
                orderable: !1,
            }, {
                data: "rider_10",
                className: 'text-left text-nowrap ',
                type: 'non-empty-string',
                render: function (data, type, row) {
                    if (typeof (row.rider_10) == 'undefined')
                        return '';
                    str = ZP_DATA_get_PRIME_TIME(row.rider_10);
                    return str
                },
                orderable: !1,
            },],
            "paging": !0,
            "pageLength": 100,
            "lengthChange": !1,
            "searching": !0,
            "deferRender": !0,
            "order": [[1, "asc"], [0, "asc"]],
            "autoWidth": !1,
            "oLanguage": {"sZeroRecords": "No Prime data available for this event."},
            "info": !1,
            "ordering": !0,
        })
    })
};
table_event_signups = function (table_name, grouping) {
    if (typeof (grouping) == 'undefined')
        grouping = !1;
    $(document).ready(function () {
        ajax_url = "cache3/results/" + ZP_VARS.zwift_event_id + "_signups.json";
        if (typeof (ZP_VARS.files['event_signups_' + ZP_VARS.zwift_event_id]) !== 'undefined')
            ajax_url = "cache3/results/event_signups" + ZP_VARS.zwift_event_id + ZP_VARS.files['event_signups_' + ZP_VARS.zwift_event_id] + '.json';
        table[table_name] = $('#' + table_name).DataTable({
            "ajax": {
                "url": ajax_url, "dataSrc": function (json) {
                    if (typeof (json.vars) !== 'undefined') {
                        for (group in json.vars) {
                            $('#' + group).html(json.vars[group])
                        }
                    }
                    if (json.fname && ZP_VARS.hash[json.fname] !== 'undefined') {
                        var hash = ZP_VARS.hash[json.fname];
                        if (hash && typeof (json.P2) !== 'undefined') {
                            let decrypted = CryptoJS.AES.decrypt(JSON.stringify(json.P2), hash, {format: CryptoJSAesJson}).toString(CryptoJS.enc.Utf8)
                            let final = JSON.parse(decrypted);
                            json.data.forEach(function (item, index) {
                                for (group in final)
                                    json.data[index][group] = final[group][json.data[index][group]]
                            })
                        }
                    }
                    return json.data
                }
            },
            select: !0,
            "columns": [{
                data: "div",
                render: ZP_DATA_get_RANKING_DIVISION,
                className: 'text-left text-nowrap padright24',
                type: 'non-empty-string',
            }, {
                data: "label",
                render: ZP_DATA_get_ZWIFT_CATEGORY,
                className: 'text-left text-nowrap padright24',
                type: 'non-empty-string',
            }, {
                data: "rank",
                render: ZP_DATA_get_RANKING_STANDING,
                "orderSequence": ["asc", "desc"],
                className: 'text-right text-nowrap',
                visible: (ZP_VARS.RANKINGS_ACTIVE) ? !0 : !1,
            }, {data: "name", render: ZP_DATA_get_NAME, className: 'text-left text-nowrap athlete_col',}, {
                data: "tname", render: function (data, type, row) {
                    if (data == '')
                        return 'zzzzzzzzzzzz';
                    return data.replace(/\W/g, '')
                }, visible: !1,
            }, {
                data: "friend", render: function (data, type, row) {
                    return data
                }, visible: !1,
            }, {
                data: "weight",
                render: ZP_DATA_get_WEIGHT,
                className: 'text-right text-nowrap',
                'orderable': !1,
                type: 'non-empty-string',
            }, {
                data: "age",
                render: ZP_DATA_get_AGE,
                className: 'text-center text-nowrap',
                "orderSequence": ["desc", "asc"],
                type: 'non-empty-string',
            }, {
                data: "height",
                render: ZP_DATA_get_HEIGHT,
                className: 'text-center text-nowrap',
                "orderSequence": ["desc", "asc"],
                type: 'non-empty-string',
            }, {
                data: "cp_1200_wkg", render: function (data, type, row) {
                    if (typeof (data) === 'undefined')
                        return '';
                    if (type != "display")
                        return data[1];
                    return data[1] + '<rsmall> wkg</rsmall>'
                }, className: 'text-right text-nowrap ', "orderable": !0, "orderSequence": ["desc"],
            }, {
                data: "cp_1200_watts", render: function (data, type, row) {
                    if (typeof (data) === 'undefined')
                        return '';
                    if (type != "display")
                        return data[1];
                    return data[1] + '<rsmall> w</rsmall>'
                }, className: 'text-right text-nowrap ', "orderable": !0, "orderSequence": ["desc"],
            }, {
                data: "cp_15_wkg", render: function (data, type, row) {
                    if (typeof (data) === 'undefined')
                        return '';
                    if (type != "display")
                        return data[1];
                    return data[1] + '<rsmall> wkg</rsmall>'
                }, className: 'text-right text-nowrap ', "orderable": !0, "orderSequence": ["desc"],
            }, {
                data: "cp_15_watts", render: function (data, type, row) {
                    if (typeof (data) === 'undefined')
                        return '';
                    if (type != "display")
                        return data[1];
                    return data[1] + '<rsmall> w</rsmall>'
                }, className: 'text-right text-nowrap ', "orderable": !0, "orderSequence": ["desc"],
            }, {data: "wrg_cat", visible: !1,}, {
                data: "s1",
                render: ZP_DATA_get_SPRINT,
                className: 'text-left text-nowrap padright24',
                "orderSequence": ["asc", "desc"],
                type: 'non-empty-string',
                visible: typeof (ZP_VARS.sprint[1]) !== 'undefined' ? !0 : !1,
            }, {
                data: "s2",
                render: ZP_DATA_get_SPRINT,
                className: 'text-left text-nowrap padright24',
                "orderSequence": ["asc", "desc"],
                type: 'non-empty-string',
                visible: typeof (ZP_VARS.sprint[2]) !== 'undefined' ? !0 : !1,
            }, {
                data: "s3",
                render: ZP_DATA_get_SPRINT,
                className: 'text-left text-nowrap padright24',
                "orderSequence": ["asc", "desc"],
                type: 'non-empty-string',
                visible: typeof (ZP_VARS.sprint[3]) !== 'undefined' ? !0 : !1,
            }, {
                data: "s4",
                render: ZP_DATA_get_SPRINT,
                className: 'text-left text-nowrap padright24',
                "orderSequence": ["asc", "desc"],
                type: 'non-empty-string',
                visible: typeof (ZP_VARS.sprint[4]) !== 'undefined' ? !0 : !1,
            }, {
                data: "s5",
                render: ZP_DATA_get_SPRINT,
                className: 'text-left text-nowrap padright24',
                "orderSequence": ["asc", "desc"],
                type: 'non-empty-string',
                visible: typeof (ZP_VARS.sprint[5]) !== 'undefined' ? !0 : !1,
            }, {
                data: "s6",
                render: ZP_DATA_get_SPRINT,
                className: 'text-left text-nowrap padright24',
                "orderSequence": ["asc", "desc"],
                type: 'non-empty-string',
                visible: typeof (ZP_VARS.sprint[6]) !== 'undefined' ? !0 : !1,
            }, {
                data: "s7",
                render: ZP_DATA_get_SPRINT,
                className: 'text-left text-nowrap padright24',
                "orderSequence": ["asc", "desc"],
                type: 'non-empty-string',
                visible: typeof (ZP_VARS.sprint[7]) !== 'undefined' ? !0 : !1,
            }, {
                data: "s8",
                render: ZP_DATA_get_SPRINT,
                className: 'text-left text-nowrap padright24',
                "orderSequence": ["asc", "desc"],
                type: 'non-empty-string',
                visible: typeof (ZP_VARS.sprint[8]) !== 'undefined' ? !0 : !1,
            }, {
                data: "s9",
                render: ZP_DATA_get_SPRINT,
                className: 'text-left text-nowrap padright24',
                "orderSequence": ["asc", "desc"],
                type: 'non-empty-string',
                visible: typeof (ZP_VARS.sprint[9]) !== 'undefined' ? !0 : !1,
            }, {
                data: "s10",
                render: ZP_DATA_get_SPRINT,
                className: 'text-left text-nowrap padright24',
                "orderSequence": ["asc", "desc"],
                type: 'non-empty-string',
                visible: typeof (ZP_VARS.sprint[10]) !== 'undefined' ? !0 : !1,
            }, {
                data: "s11",
                render: ZP_DATA_get_SPRINT,
                className: 'text-left text-nowrap padright24',
                "orderSequence": ["asc", "desc"],
                type: 'non-empty-string',
                visible: typeof (ZP_VARS.sprint[11]) !== 'undefined' ? !0 : !1,
            }, {
                data: "s12",
                render: ZP_DATA_get_SPRINT,
                className: 'text-left text-nowrap padright24',
                "orderSequence": ["asc", "desc"],
                type: 'non-empty-string',
                visible: typeof (ZP_VARS.sprint[12]) !== 'undefined' ? !0 : !1,
            }, {
                data: "s13",
                render: ZP_DATA_get_SPRINT,
                className: 'text-left text-nowrap padright24',
                "orderSequence": ["asc", "desc"],
                type: 'non-empty-string',
                visible: typeof (ZP_VARS.sprint[13]) !== 'undefined' ? !0 : !1,
            }, {
                data: "s14",
                render: ZP_DATA_get_SPRINT,
                className: 'text-left text-nowrap padright24',
                "orderSequence": ["asc", "desc"],
                type: 'non-empty-string',
                visible: typeof (ZP_VARS.sprint[14]) !== 'undefined' ? !0 : !1,
            }, {
                data: "s15",
                render: ZP_DATA_get_SPRINT,
                className: 'text-left text-nowrap padright24',
                "orderSequence": ["asc", "desc"],
                type: 'non-empty-string',
                visible: typeof (ZP_VARS.sprint[15]) !== 'undefined' ? !0 : !1,
            }, {
                data: "s16",
                render: ZP_DATA_get_SPRINT,
                className: 'text-left text-nowrap padright24',
                "orderSequence": ["asc", "desc"],
                type: 'non-empty-string',
                visible: typeof (ZP_VARS.sprint[16]) !== 'undefined' ? !0 : !1,
            }, {
                data: "s17",
                render: ZP_DATA_get_SPRINT,
                className: 'text-left text-nowrap padright24',
                "orderSequence": ["asc", "desc"],
                type: 'non-empty-string',
                visible: typeof (ZP_VARS.sprint[17]) !== 'undefined' ? !0 : !1,
            }, {
                data: "s18",
                render: ZP_DATA_get_SPRINT,
                className: 'text-left text-nowrap padright24',
                "orderSequence": ["asc", "desc"],
                type: 'non-empty-string',
                visible: typeof (ZP_VARS.sprint[18]) !== 'undefined' ? !0 : !1,
            }, {
                data: "s19",
                render: ZP_DATA_get_SPRINT,
                className: 'text-left text-nowrap padright24',
                "orderSequence": ["asc", "desc"],
                type: 'non-empty-string',
                visible: typeof (ZP_VARS.sprint[19]) !== 'undefined' ? !0 : !1,
            }, {
                data: "s20",
                render: ZP_DATA_get_SPRINT,
                className: 'text-left text-nowrap padright24',
                "orderSequence": ["asc", "desc"],
                type: 'non-empty-string',
                visible: typeof (ZP_VARS.sprint[20]) !== 'undefined' ? !0 : !1,
            }, {
                data: "s21",
                render: ZP_DATA_get_SPRINT,
                className: 'text-left text-nowrap padright24',
                "orderSequence": ["asc", "desc"],
                type: 'non-empty-string',
                visible: typeof (ZP_VARS.sprint[21]) !== 'undefined' ? !0 : !1,
            }, {
                data: "s22",
                render: ZP_DATA_get_SPRINT,
                className: 'text-left text-nowrap padright24',
                "orderSequence": ["asc", "desc"],
                type: 'non-empty-string',
                visible: typeof (ZP_VARS.sprint[22]) !== 'undefined' ? !0 : !1,
            }, {
                data: "s23",
                render: ZP_DATA_get_SPRINT,
                className: 'text-left text-nowrap padright24',
                "orderSequence": ["asc", "desc"],
                type: 'non-empty-string',
                visible: typeof (ZP_VARS.sprint[23]) !== 'undefined' ? !0 : !1,
            }, {
                data: "s24",
                render: ZP_DATA_get_SPRINT,
                className: 'text-left text-nowrap padright24',
                "orderSequence": ["asc", "desc"],
                type: 'non-empty-string',
                visible: typeof (ZP_VARS.sprint[24]) !== 'undefined' ? !0 : !1,
            }, {
                data: "s25",
                render: ZP_DATA_get_SPRINT,
                className: 'text-left text-nowrap padright24',
                "orderSequence": ["asc", "desc"],
                type: 'non-empty-string',
                visible: typeof (ZP_VARS.sprint[25]) !== 'undefined' ? !0 : !1,
            }, {
                data: "s26",
                render: ZP_DATA_get_SPRINT,
                className: 'text-left text-nowrap padright24',
                "orderSequence": ["asc", "desc"],
                type: 'non-empty-string',
                visible: typeof (ZP_VARS.sprint[26]) !== 'undefined' ? !0 : !1,
            }, {
                data: "s27",
                render: ZP_DATA_get_SPRINT,
                className: 'text-left text-nowrap padright24',
                "orderSequence": ["asc", "desc"],
                type: 'non-empty-string',
                visible: typeof (ZP_VARS.sprint[27]) !== 'undefined' ? !0 : !1,
            }, {
                data: "s28",
                render: ZP_DATA_get_SPRINT,
                className: 'text-left text-nowrap padright24',
                "orderSequence": ["asc", "desc"],
                type: 'non-empty-string',
                visible: typeof (ZP_VARS.sprint[28]) !== 'undefined' ? !0 : !1,
            }, {
                data: "s29",
                render: ZP_DATA_get_SPRINT,
                className: 'text-left text-nowrap padright24',
                "orderSequence": ["asc", "desc"],
                type: 'non-empty-string',
                visible: typeof (ZP_VARS.sprint[29]) !== 'undefined' ? !0 : !1,
            }, {
                data: "s30",
                render: ZP_DATA_get_SPRINT,
                className: 'text-left text-nowrap padright24',
                "orderSequence": ["asc", "desc"],
                type: 'non-empty-string',
                visible: typeof (ZP_VARS.sprint[30]) !== 'undefined' ? !0 : !1,
            }, {
                data: "s31",
                render: ZP_DATA_get_SPRINT,
                className: 'text-left text-nowrap padright24',
                "orderSequence": ["asc", "desc"],
                type: 'non-empty-string',
                visible: typeof (ZP_VARS.sprint[31]) !== 'undefined' ? !0 : !1,
            }, {
                data: "s32",
                render: ZP_DATA_get_SPRINT,
                className: 'text-left text-nowrap padright24',
                "orderSequence": ["asc", "desc"],
                type: 'non-empty-string',
                visible: typeof (ZP_VARS.sprint[32]) !== 'undefined' ? !0 : !1,
            }, {
                data: "s33",
                render: ZP_DATA_get_SPRINT,
                className: 'text-left text-nowrap padright24',
                "orderSequence": ["asc", "desc"],
                type: 'non-empty-string',
                visible: typeof (ZP_VARS.sprint[33]) !== 'undefined' ? !0 : !1,
            }, {
                data: "s34",
                render: ZP_DATA_get_SPRINT,
                className: 'text-left text-nowrap padright24',
                "orderSequence": ["asc", "desc"],
                type: 'non-empty-string',
                visible: typeof (ZP_VARS.sprint[34]) !== 'undefined' ? !0 : !1,
            }, {
                data: "s35",
                render: ZP_DATA_get_SPRINT,
                className: 'text-left text-nowrap padright24',
                "orderSequence": ["asc", "desc"],
                type: 'non-empty-string',
                visible: typeof (ZP_VARS.sprint[35]) !== 'undefined' ? !0 : !1,
            }, {
                data: "s36",
                render: ZP_DATA_get_SPRINT,
                className: 'text-left text-nowrap padright24',
                "orderSequence": ["asc", "desc"],
                type: 'non-empty-string',
                visible: typeof (ZP_VARS.sprint[36]) !== 'undefined' ? !0 : !1,
            }, {
                data: "s37",
                render: ZP_DATA_get_SPRINT,
                className: 'text-left text-nowrap padright24',
                "orderSequence": ["asc", "desc"],
                type: 'non-empty-string',
                visible: typeof (ZP_VARS.sprint[37]) !== 'undefined' ? !0 : !1,
            }, {
                data: "s38",
                render: ZP_DATA_get_SPRINT,
                className: 'text-left text-nowrap padright24',
                "orderSequence": ["asc", "desc"],
                type: 'non-empty-string',
                visible: typeof (ZP_VARS.sprint[38]) !== 'undefined' ? !0 : !1,
            }, {
                data: "s39",
                render: ZP_DATA_get_SPRINT,
                className: 'text-left text-nowrap padright24',
                "orderSequence": ["asc", "desc"],
                type: 'non-empty-string',
                visible: typeof (ZP_VARS.sprint[39]) !== 'undefined' ? !0 : !1,
            }, {
                data: "s40",
                render: ZP_DATA_get_SPRINT,
                className: 'text-left text-nowrap padright24',
                "orderSequence": ["asc", "desc"],
                type: 'non-empty-string',
                visible: typeof (ZP_VARS.sprint[40]) !== 'undefined' ? !0 : !1,
            }, {
                data: "s41",
                render: ZP_DATA_get_SPRINT,
                className: 'text-left text-nowrap padright24',
                "orderSequence": ["asc", "desc"],
                type: 'non-empty-string',
                visible: typeof (ZP_VARS.sprint[41]) !== 'undefined' ? !0 : !1,
            }, {
                data: "s42",
                render: ZP_DATA_get_SPRINT,
                className: 'text-left text-nowrap padright24',
                "orderSequence": ["asc", "desc"],
                type: 'non-empty-string',
                visible: typeof (ZP_VARS.sprint[42]) !== 'undefined' ? !0 : !1,
            }, {
                data: "s43",
                render: ZP_DATA_get_SPRINT,
                className: 'text-left text-nowrap padright24',
                "orderSequence": ["asc", "desc"],
                type: 'non-empty-string',
                visible: typeof (ZP_VARS.sprint[43]) !== 'undefined' ? !0 : !1,
            }, {
                data: "s44",
                render: ZP_DATA_get_SPRINT,
                className: 'text-left text-nowrap padright24',
                "orderSequence": ["asc", "desc"],
                type: 'non-empty-string',
                visible: typeof (ZP_VARS.sprint[44]) !== 'undefined' ? !0 : !1,
            }, {
                data: "s45",
                render: ZP_DATA_get_SPRINT,
                className: 'text-left text-nowrap padright24',
                "orderSequence": ["asc", "desc"],
                type: 'non-empty-string',
                visible: typeof (ZP_VARS.sprint[45]) !== 'undefined' ? !0 : !1,
            }, {
                data: "s46",
                render: ZP_DATA_get_SPRINT,
                className: 'text-left text-nowrap padright24',
                "orderSequence": ["asc", "desc"],
                type: 'non-empty-string',
                visible: typeof (ZP_VARS.sprint[46]) !== 'undefined' ? !0 : !1,
            }, {
                data: "s47",
                render: ZP_DATA_get_SPRINT,
                className: 'text-left text-nowrap padright24',
                "orderSequence": ["asc", "desc"],
                type: 'non-empty-string',
                visible: typeof (ZP_VARS.sprint[47]) !== 'undefined' ? !0 : !1,
            }, {
                data: "s48",
                render: ZP_DATA_get_SPRINT,
                className: 'text-left text-nowrap padright24',
                "orderSequence": ["asc", "desc"],
                type: 'non-empty-string',
                visible: typeof (ZP_VARS.sprint[48]) !== 'undefined' ? !0 : !1,
            }, {
                data: "s49",
                render: ZP_DATA_get_SPRINT,
                className: 'text-left text-nowrap padright24',
                "orderSequence": ["asc", "desc"],
                type: 'non-empty-string',
                visible: typeof (ZP_VARS.sprint[49]) !== 'undefined' ? !0 : !1,
            }, {
                data: "s50",
                render: ZP_DATA_get_SPRINT,
                className: 'text-left text-nowrap padright24',
                "orderSequence": ["asc", "desc"],
                type: 'non-empty-string',
                visible: typeof (ZP_VARS.sprint[51]) !== 'undefined' ? !0 : !1,
            }, {
                data: "s51",
                render: ZP_DATA_get_SPRINT,
                className: 'text-left text-nowrap padright24',
                "orderSequence": ["asc", "desc"],
                type: 'non-empty-string',
                visible: typeof (ZP_VARS.sprint[52]) !== 'undefined' ? !0 : !1,
            }, {
                data: "s52",
                render: ZP_DATA_get_SPRINT,
                className: 'text-left text-nowrap padright24',
                "orderSequence": ["asc", "desc"],
                type: 'non-empty-string',
                visible: typeof (ZP_VARS.sprint[53]) !== 'undefined' ? !0 : !1,
            }, {
                data: "s53",
                render: ZP_DATA_get_SPRINT,
                className: 'text-left text-nowrap padright24',
                "orderSequence": ["asc", "desc"],
                type: 'non-empty-string',
                visible: typeof (ZP_VARS.sprint[50]) !== 'undefined' ? !0 : !1,
            }, {
                data: "lzid", render: function (data, type, row) {
                    if (type != "display")
                        return data;
                    if (!data)
                        return '';
                    str = '<a href="events.php?zid=' + data + '">' + row.lname + '</a>';
                    return str
                }, className: 'text-left text-nowrap padright24', "orderSequence": ["asc"], type: 'non-empty-string',
            },],
            "paging": !0,
            "pageLength": 200,
            "lengthChange": !1,
            "searching": !0,
            "deferRender": !0,
            "order": [[1, "asc"], [4, "asc"], [3, "asc"]],
            "autoWidth": !1,
            "oLanguage": {"sZeroRecords": "Updated every 5 minutes if event starts in the next 12 hours and every 2 hours for future events."},
            "info": !1,
            "ordering": !0,
            "drawCallback": function (settings) {
                var api = this.api();
                if (typeof (table[table_name]) == 'undefined')
                    return;
                if (!table[table_name].order())
                    return;
                if (ZP_VARS.event_type > 0)
                    return;
                if (grouping)
                    return;
                var rows = api.rows({page: 'current'}).nodes();
                var last = null;
                var last_i = 0;
                api.column(1, {page: 'current'}).data().each(function (group, i) {
                    var currentOrder = table[table_name].order()[0];
                    if (currentOrder[0] == 0)
                        if (last !== group) {
                            if (i) {
                                $(rows).eq(i).before('<tr class="group" style="height:20px;background-color:#efefef;"><td colspan=11"></td></tr>')
                            }
                            last = group;
                            last_i = 0
                        }
                })
            }
        })
    })
};
table_event_results_zwift = function (table_name, grouping) {
    if (typeof (grouping) == 'undefined')
        grouping = !1;
    $(document).ready(function () {
        ajax_url = "cache3/results/" + ZP_VARS.zwift_event_id + "_zwift.json";
        if (typeof (ZP_VARS.files['event_results_zwift_' + ZP_VARS.zwift_event_id]) !== 'undefined')
            ajax_url = "cache3/results/event_results_zwift" + ZP_VARS.zwift_event_id + ZP_VARS.files['event_results_zwift_' + ZP_VARS.zwift_event_id] + '.json';
        table[table_name] = $('#' + table_name).DataTable({
            "ajax": {
                "url": ajax_url, dataSrc: function (json) {
                    if (json.data.length) {
                        $('#zwift_results').html(' (' + json.data.length + ') ');
                        if (ZP_VARS.waiting_for_new > 0)
                            $("#zwift_results").fadeIn(1000).fadeOut(1000).fadeIn(1000).fadeOut(1000).fadeIn(1000).fadeOut(1000).fadeIn(1000)
                    }
                    if (json.fname && ZP_VARS.hash[json.fname] !== 'undefined') {
                        var hash = ZP_VARS.hash[json.fname];
                        if (hash && typeof (json.P2) !== 'undefined') {
                            let decrypted = CryptoJS.AES.decrypt(JSON.stringify(json.P2), hash, {format: CryptoJSAesJson}).toString(CryptoJS.enc.Utf8)
                            let final = JSON.parse(decrypted);
                            json.data.forEach(function (item, index) {
                                for (group in final)
                                    json.data[index][group] = final[group][json.data[index][group]]
                            })
                        }
                    }
                    return json.data
                },
            },
            select: !0,
            "columns": [{
                data: "label",
                render: ZP_DATA_get_ZWIFT_CATEGORY,
                className: 'text-left text-nowrap padright24',
                type: 'non-empty-string',
            }, {
                data: "dq_cat", render: ZP_DATA_get_NEW_CATEGORY, render: function (data, type, row) {
                    if (type != "display")
                        return data;
                    if (!data)
                        return '';
                    str = '<span class="label label-default label-as-badge" style="font-size:14px;">' + data + '</span> ';
                    return str
                }, className: 'text-left text-nowrap padright24', type: 'non-empty-string',
            }, {data: "pos", className: 'text-left text-nowrap padright24', type: 'non-empty-string',}, {
                data: "name",
                render: ZP_DATA_get_NAME,
                className: 'text-left text-nowrap athlete_col',
                type: 'non-empty-string',
            }, {
                data: "race_time", render: function (data, type, row) {
                    if (type != "display")
                        return data;
                    var time = data[0];
                    var mins = ~~(time / 60);
                    var secs = time % 60;
                    var hrs = ~~(time / 3600);
                    var mins = ~~((time % 3600) / 60);
                    var secs = time % 60;
                    var ms = 0;
                    if (hrs || mins) {
                        ms = Math.round((secs - ~~secs) * 1000) + '';
                        ms = ms.padStart(3, '0');
                        secs = ~~secs
                    } else {
                        ms = '';
                        secs = secs.toFixed(3);
                        if (secs % 1 == 0)
                            secs = Math.round(secs)
                    }
                    var ret = "";
                    if (hrs > 0) {
                        ret += "" + hrs + ":";
                        if (mins > 0) {
                            ret += (mins < 10 ? "0" : "") + mins + ":" + (secs < 10 ? "0" : "")
                        } else ret += '00:'
                    } else if (mins > 0) {
                        ret += "" + (mins < 10 ? "0" : "") + mins + ":" + (secs < 10 ? "0" : "")
                    }
                    ret += "" + secs + '<rsmall>.' + ms + '</rsmall>';
                    return ret
                }, className: 'text-right text-nowrap padright24', type: 'non-empty-string',
            }, {
                data: "watts",
                render: ZP_DATA_get_WKG_OR_WATTS,
                className: 'text-right text-nowrap padright24',
            }, {
                data: "wkg",
                render: ZP_DATA_get_WKG,
                className: 'text-right text-nowrap padright24',
                "orderSequence": ["desc", "asc"],
                type: 'non-empty-string',
            }, {
                data: "bpm",
                render: ZP_DATA_get_HR,
                className: 'text-right text-nowrap padright24',
                "orderSequence": ["desc", "asc"],
                type: 'non-empty-string',
            }, {
                data: "power_type",
                render: ZP_DATA_get_POWER_TYPE,
                className: 'text-right text-nowrap padright24',
                "orderSequence": ["desc", "asc"],
                type: 'non-empty-string',
            }, {
                data: "wkg_ftp",
                render: function (data, type, row) {
                    if (type != "display")
                        return data;
                    str = ZP_DATA_get_WKG_CATEGORY(data, type, row);
                    return str
                },
                className: 'text-right text-nowrap',
                "orderSequence": ["desc", "asc"],
                orderable: !1,
                type: 'non-empty-string',
            },],
            "paging": !0,
            "pageLength": 100,
            "lengthChange": !1,
            "searching": !0,
            "deferRender": !0,
            "order": [[0, "asc"], [2, "asc"]],
            "autoWidth": !1,
            "oLanguage": {"sZeroRecords": "Results are generated every 30 minutes after a race has started."},
            "info": !1,
            "ordering": !0,
            "drawCallback": function (settings) {
                var api = this.api();
                if (typeof (table[table_name]) == 'undefined')
                    return;
                if (!table[table_name].order())
                    return;
                if (ZP_VARS.event_type > 0)
                    return;
                if (grouping)
                    return;
                var rows = api.rows({page: 'current'}).nodes();
                var last = null;
                var last_i = 0;
                api.column(0, {page: 'current'}).data().each(function (group, i) {
                    var currentOrder = table[table_name].order()[0];
                    if (currentOrder[0] == 0)
                        if (last !== group) {
                            if (i) {
                                $(rows).eq(i).before('<tr class="group" style="height:20px;background-color:#efefef;"><td colspan=10"></td></tr>')
                            }
                            last = group;
                            last_i = 0
                        }
                })
            }
        })
    })
};
table_event_results_final = function (table_name, ajax_url) {
    ZP_VARS.zwift_id_list = [];
    if (typeof (ajax_url) == 'undefined') {
        ajax_url = "cache3/results/" + ZP_VARS.zwift_event_id + "_view.json";
        if (typeof (ZP_VARS.files['event_results_view_' + ZP_VARS.zwift_event_id]) !== 'undefined')
            ajax_url = "cache3/results/event_results_view" + ZP_VARS.zwift_event_id + ZP_VARS.files['event_results_view_' + ZP_VARS.zwift_event_id] + '.json'
    }
    $(document).ready(function () {
        buildColumnChooser(table_name);
        table[table_name] = $('#' + table_name).DataTable({
            "ajax": {
                "url": ajax_url, dataSrc: function (json) {
                    if (json.data.length) {
                        $("#final_results").html(' (' + json.data.length + ') ');
                        if (ZP_VARS.waiting_for_new > 0)
                            $("#final_results").fadeIn(1000).fadeOut(1000).fadeIn(1000).fadeOut(1000).fadeIn(1000).fadeOut(1000).fadeIn(1000)
                    }
                    if (json.fname && ZP_VARS.hash[json.fname] !== 'undefined') {
                        var hash = ZP_VARS.hash[json.fname];
                        if (hash && typeof (json.P2) !== 'undefined') {
                            let decrypted = CryptoJS.AES.decrypt(JSON.stringify(json.P2), hash, {format: CryptoJSAesJson}).toString(CryptoJS.enc.Utf8)
                            let final = JSON.parse(decrypted);
                            json.data.forEach(function (item, index) {
                                for (group in final)
                                    json.data[index][group] = final[group][json.data[index][group]]
                            })
                        }
                    }
                    return json.data
                },
            },
            "columns": [{
                data: "pos",
                render: ZP_DATA_get_POSITION_SIMPLE,
                className: 'text-left text-nowrap',
                visible: !1,
            }, {
                data: "pos",
                render: ZP_DATA_get_POSITION_SIMPLE,
                className: 'text-left text-nowrap',
                visible: !1,
            }, {data: "pos", render: ZP_DATA_get_POSITION_SIMPLE, className: 'text-left text-nowrap', visible: !1,}, {
                data: "category", render: function (data, type, row) {
                    if (type != "display")
                        return data;
                    str = '';
                    var add = '';
                    if (typeof (row.actid) !== 'undefined' && row.actid > 0 && row.src == 1)
                        add = '<i onclick="javascript:activity_link(\'' + row.actid + '\');return false;" class="fa fa-bar-chart fa-fw text-green hover-orange analysis_link" aria-hidden="true" title="View activity for ' + row.name + ' at Zwift.com"></i>';
                    str += add + ZP_DATA_get_NEW_CATEGORY(data, type, row);
                    return str
                }, className: ' info-expand text-right text-nowrap', orderable: !1,
            }, {
                data: "pos",
                render: ZP_DATA_get_POSITION,
                className: 'text-left text-nowrap',
                type: 'non-empty-string',
                orderable: !0,
            }, {data: "name", render: ZP_DATA_get_NAME, className: 'text-left text-nowrap athlete_col',}, {
                data: "time",
                render: ZP_DATA_get_TIME_WITH_GAP,
                className: 'text-right text-nowrap padright24',
                "orderSequence": ["asc", "desc"],
            }, {
                data: "lag",
                render: ZP_DATA_get_LAG,
                className: 'text-left text-nowrap',
                "orderSequence": ["desc", "asc"],
                visible: !1,
                orderable: !0,
            }, {
                data: "vtta",
                render: function (data, type, row) {
                    if (type != "display")
                        return data;
                    if (!data)
                        return '';
                    if (!row.vttat)
                        return '';
                    if (typeof (row.vttat) === 'undefined')
                        return convertSecondsToTime(data);
                    return ZP_DATA_get_VTTA_TIME(row.vttat, row.vtta)
                },
                className: 'text-right text-nowrap padright24',
                "orderSequence": ["desc"],
                visible: ZP_CAN_DISPLAY_COLUMN('vtta', !1),
                type: 'non-empty-string',
            }, {
                data: "pts",
                render: ZP_DATA_get_POINTS,
                className: 'text-right text-nowrap padright24',
                "orderSequence": ["asc", "desc"],
                visible: ZP_CAN_DISPLAY_COLUMN('pts', !1),
            }, {
                data: "avg_wkg",
                render: function (data, type, row) {
                    view_data = data;
                    if (type != "display")
                        return view_data[0];
                    if (ZP_VARS.expand_results)
                        return ZP_DATA_get_95_PERCENT(row); else return ZP_DATA_get_AVG_WKG(data, type, row)
                },
                className: 'text-right text-nowrap',
                "orderSequence": ["desc", "asc"],
                orderable: !1,
                type: 'non-empty-string',
            }, {
                data: "avg_power",
                render: function (data, type, row) {
                    view_data = data;
                    if (type != "display")
                        return view_data[0];
                    return ZP_DATA_get_WKG_OR_WATTS(view_data, type, row)
                },
                className: 'text-right text-nowrap padright24',
                "orderSequence": ["desc", "asc"],
                type: 'non-empty-string',
            }, {
                data: "np",
                render: ZP_DATA_get_NP,
                className: 'text-right text-nowrap',
                "orderSequence": ["desc", "asc"],
                type: 'non-empty-string',
                orderable: !1,
            }, {
                data: "wkg1200",
                render: function (data, type, row) {
                    view_data = data;
                    if (typeof (ZP_VARS.view_power_type) !== 'undefined' && ZP_VARS.view_power_type == 1)
                        view_data = row.w1200;
                    if (type != "display")
                        return view_data[0];
                    if (data != view_data)
                        return ZP_DATA_get_WATTS(view_data, type, row); else return ZP_DATA_get_WKG(data, type, row)
                },
                className: 'text-right text-nowrap padright24',
                "orderSequence": ["desc", "asc"],
                type: 'non-empty-string',
            }, {
                data: "wkg300",
                render: function (data, type, row) {
                    view_data = data;
                    if (typeof (ZP_VARS.view_power_type) !== 'undefined' && ZP_VARS.view_power_type == 1)
                        view_data = row.w300;
                    if (type != "display")
                        return view_data[0];
                    if (data != view_data)
                        return ZP_DATA_get_WATTS(view_data, type, row); else return ZP_DATA_get_WKG(data, type, row)
                },
                className: 'text-right text-nowrap padright24',
                "orderSequence": ["desc", "asc"],
                type: 'non-empty-string',
            }, {
                data: "wkg120",
                render: function (data, type, row) {
                    view_data = data;
                    if (typeof (ZP_VARS.view_power_type) !== 'undefined' && ZP_VARS.view_power_type == 1)
                        view_data = row.w120;
                    if (type != "display")
                        return view_data[0];
                    if (data != view_data)
                        return ZP_DATA_get_WATTS(view_data, type, row); else return ZP_DATA_get_WKG(data, type, row)
                },
                className: 'text-right text-nowrap padright24',
                "orderSequence": ["desc", "asc"],
                type: 'non-empty-string',
                visible: !1,
            }, {
                data: "wkg60",
                render: function (data, type, row) {
                    view_data = data;
                    if (typeof (ZP_VARS.view_power_type) !== 'undefined' && ZP_VARS.view_power_type == 1)
                        view_data = row.w60;
                    if (type != "display")
                        return view_data[0];
                    if (data != view_data)
                        return ZP_DATA_get_WATTS(view_data, type, row); else return ZP_DATA_get_WKG(data, type, row)
                },
                className: 'text-right text-nowrap padright24',
                "orderSequence": ["desc", "asc"],
                type: 'non-empty-string',
                visible: ZP_CAN_DISPLAY_COLUMN_REVERSE('vtta', !0),
            }, {
                data: "wkg30",
                render: function (data, type, row) {
                    view_data = data;
                    if (typeof (ZP_VARS.view_power_type) !== 'undefined' && ZP_VARS.view_power_type == 1)
                        view_data = row.w30;
                    if (type != "display")
                        return view_data[0];
                    if (data != view_data)
                        return ZP_DATA_get_WATTS(view_data, type, row); else return ZP_DATA_get_WKG(data, type, row)
                },
                className: 'text-right text-nowrap padright24',
                "orderSequence": ["desc", "asc"],
                type: 'non-empty-string',
                visible: !0,
            }, {
                data: "wkg15",
                render: function (data, type, row) {
                    view_data = data;
                    if (typeof (ZP_VARS.view_power_type) !== 'undefined' && ZP_VARS.view_power_type == 1)
                        view_data = row.w15;
                    if (type != "display")
                        return view_data[0];
                    if (data != view_data)
                        return ZP_DATA_get_WATTS(view_data, type, row); else return ZP_DATA_get_WKG(data, type, row)
                },
                className: 'text-right text-nowrap padright24',
                "orderSequence": ["desc", "asc"],
                type: 'non-empty-string',
                visible: ZP_CAN_DISPLAY_COLUMN_REVERSE('vtta', !0),
            }, {
                data: "wkg5",
                render: function (data, type, row) {
                    view_data = data;
                    if (typeof (ZP_VARS.view_power_type) !== 'undefined' && ZP_VARS.view_power_type == 1)
                        view_data = row.w5;
                    if (type != "display")
                        return view_data[0];
                    if (data != view_data)
                        return ZP_DATA_get_WATTS(view_data, type, row); else return ZP_DATA_get_WKG(data, type, row)
                },
                className: 'text-right text-nowrap padright24',
                "orderSequence": ["desc", "asc"],
                type: 'non-empty-string',
                visible: !1,
            }, {
                data: "weight",
                render: ZP_DATA_get_WEIGHT,
                className: 'text-right text-nowrap',
                'orderable': !1,
                type: 'non-empty-string',
            },{
                data: "age",
                render: ZP_DATA_get_AGE,
                className: 'text-center text-nowrap',
                "orderSequence": [ "asc", "desc"],
                type: 'non-empty-string',

            },{
                data: "avg_hr",
                render: ZP_DATA_get_HR_MAX,
                className: 'text-right text-nowrap',
                'orderable': !1,
                type: 'non-empty-string',
            }, {
                data: "max_hr",
                render: ZP_DATA_get_HR,
                className: 'text-center text-nowrap',
                "orderSequence": ["desc", "asc"],
                type: 'non-empty-string',
            }, {
                data: "height",
                render: ZP_DATA_get_HEIGHT,
                className: 'info-expand text-right text-nowrap padright24',
                "orderSequence": ["desc", "asc"],
                type: 'non-empty-string',
            }, {
                data: "power_type",
                render: ZP_DATA_get_POWER_TYPE,
                className: 'text-center',
                type: 'non-empty-string',
                "orderable": !1,
                visible: !1,
            }, {
                data: "zwid",
                render: ZP_DATA_get_ZWID,
                visible: !1,
                className: 'text-right',
                "orderable": !1,
            }, {
                data: "skill_b",
                render: ZP_DATA_get_RANKING_EVENT_BEFORE,
                className: 'text-right text-nowrap',
                visible: !1,
                orderable: !1,
            }, {
                data: "skill",
                render: ZP_DATA_get_RANKING_EVENT,
                className: 'text-right text-nowrap',
                visible: !1,
                orderable: !1,
            }, {
                data: "skill_gain",
                render: ZP_DATA_get_RANKING_GAIN,
                className: 'text-right text-nowrap',
                visible: (ZP_VARS.RANKINGS_ACTIVE) ? !0 : !1,
                orderable: !1,
            }, {
                data: "uid", render: function (data, type, row) {
                    if (type != "display")
                        return data;
                    if (!data)
                        return '';
                    str = '';
                    cp = ' <div class="pull-left"><i class="fa fa-fw text-gray hover-red " ></i></div>';
                    if (row.cp > 0)
                        cp = ' <div class="pull-left"><a href="#" onClick="javascript:view_critical_power(' + row.zwid + ');return false"><i id="cp_zwift_id_' + row.zwid + '" class="fa fa-pie-chart text-gray hover-red " aria-hidden="true" title="Critical Power"></i></a></div>';
                    if (row.pos == 1 && !ZP_VARS.zwift_id_list.length)
                        ZP_VARS.zwift_id_list.push(row.zwid); else if (row.zwid == ZP_VARS.zid) {
                        ZP_VARS.zwift_id_list = [];
                        ZP_VARS.zwift_id_list.push(row.zwid)
                    }
                    return cp
                }, className: 'text-center', orderable: !1,
            },],
            "paging": !0,
            "sDom": "<'search_align_top2'f>rtip",
            "pageLength": 200,
            "lengthChange": !1,
            "searching": !0,
            "deferRender": !0,
            "order": [[0, "asc"]],
            "autoWidth": !1,
            "stateSave": !1,
            "oLanguage": {"sZeroRecords": "Results are generated every 30 minutes for upto 6 hours after event begins."},
            "info": !1,
            "ordering": !0,
            "initComplete": function (settings, json) {
                zwift_id_list = ZP_VARS.zwift_id_list.join(',');
                if (ZP_VARS.zwift_id_list.length)
                    for (i = 0; i < ZP_VARS.zwift_id_list.length; i++)
                        $('#cp_zwift_id_' + ZP_VARS.zwift_id_list[i]).removeClass('text-gray').addClass('text-green');
                CRITICAL_POWER_URL = "api3.php?do=critical_power_event&zwift_id=" + zwift_id_list + "&zwift_event_id=" + ZP_VARS.zwift_event_id
            },
        });
        $("<div id='tooltip_bg'></div>").css({
            position: "absolute",
            display: "none",
            "text-align": "center",
            "-moz-border-radius": "5px",
            "-webkit-border-radius": "5px",
            "border-radius": "5px",
            "border": "2px solid #fff",
            padding: "3px 7px",
            "font-size": "12px",
            "color": "#fff",
            "background-color": "#fff"
        }).appendTo("body");
        $("<div id='tooltip'></div>").css({
            position: "absolute",
            display: "none",
            "text-align": "center",
            "-moz-border-radius": "5px",
            "-webkit-border-radius": "5px",
            "border-radius": "5px",
            "border": "2px solid",
            padding: "3px 7px",
            "font-size": "12px",
            "color": "#555"
        }).appendTo("body");
        updateColumnChooser(table_name)
    })
}

function view_critical_power(zwift_id) {
    var index = ZP_VARS.zwift_id_list.indexOf(zwift_id);
    if (index > -1) {
        ZP_VARS.zwift_id_list.splice(index, 1);
        $('#cp_zwift_id_' + zwift_id).removeClass('text-green').addClass('text-gray')
    } else {
        ZP_VARS.zwift_id_list.push(zwift_id);
        $('#cp_zwift_id_' + zwift_id).removeClass('text-gray').addClass('text-green')
    }
    zwift_id_list = ZP_VARS.zwift_id_list.join(',');
    CRITICAL_POWER_URL = "api3.php?do=critical_power_event&zwift_id=" + zwift_id_list + "&zwift_event_id=" + ZP_VARS.zwift_event_id;
    reload_critical_power_ajax();
    $('#cp_view').click()
}

function activity_link(actid) {
    window.open('https://zwift.com/feed/' + actid)
};var live_active = -1;
var twitch_loaded = !1;
var next_live_update = update_period;
var RIDER_LOCATIONS = [];
if (update_period === 'undefined')
    var update_period = 20;
$(document).ready(function () {
    ZP_VARS.live_selection = 0;
    display = $('#timer');
    next_live_update = update_period;
    startTimer(display);
    doLiveUpdate();
    $('#twitch').click(function () {
        if (!twitch_loaded) {
            $('#twitch_video').attr('src', 'http://player.twitch.tv/?channel=nathanguerra&autoplay=true');
            $('#twitch_chat').attr('src', 'http://www.twitch.tv/nathanguerra/chat')
        }
        twitch_loaded = !0
    })
});
table_live_results = function (table_name) {
    ZP_VARS.live_rider_selection = [];
    $(document).ready(function () {
        id = document.getElementById("event_id");
        buildColumnChooser(table_name);
        table[table_name] = $('#' + table_name).DataTable({
            "ajax": {
                url: "cache3/live/results_" + ZP_VARS.zwift_event_id + ".json", "dataSrc": function (json) {
                    ZP_VARS.live_selection = 0;
                    if (typeof (ZP_VARS.TIME_GAPS) === 'undefined')
                        ZP_VARS.TIME_GAPS = new Array();
                    if (typeof (json.time_gaps) !== 'undefined') {
                        for (group in json.time_gaps) {
                            ZP_VARS.TIME_GAPS[group] = json.time_gaps[group]
                        }
                        doTimeGapUpdate()
                    }
                    return json.data
                }
            },
            "columns": [{
                data: "position", render: function (data, type, row) {
                    if (type != "display")
                        return data;
                    str = '';
                    if (row.div > 5)
                        row.div = row.div / 10;
                    cat_name = ZP_DIV_TO_NAME(row.div);
                    str = '<span class="label ' + ZP_get_category_color(row.div) + ' label-as-badge" style="font-size:8px;">' + cat_name + '</span> ';
                    return str
                }, className: 'text-center text-nowrap', orderable: !1, type: 'non-empty-string',
            }, {
                data: "position", render: function (data, type, row) {
                    if (type != "display")
                        return data;
                    str = '';
                    if (typeof (ZP_VARS.position_type) !== 'undefined' && ZP_VARS.position_type)
                        str += row.pos_in_grp; else str += data;
                    return str
                }, className: 'text-center text-nowrap', type: 'non-empty-string',
            }, {data: "fin", visible: !1, orderable: !1,}, {
                data: "label", render: function (data, type, row) {
                    str = ZP_DATA_get_ZWIFT_CATEGORY(data, type, row);
                    return str
                }, className: 'text-left text-nowrap', orderable: !1,
            }, {
                data: "name", render: function (data, type, row, obj) {
                    if (type != "display")
                        return data;
                    str = ZP_DATA_get_NAME(data, type, row, obj);
                    return str
                }, className: 'text-left text-nowrap athlete_col', orderable: !1,
            }, {
                data: "time_diff", render: function (data, type, row) {
                    if (row.position == 1)
                        str = convertSecondsToTime(row.race_time[0] / 1000); else str = '<small>+</small>' + convertSecondsToTime(data / 1000);
                    return str
                }, className: 'text-right text-nowrap ', "orderSequence": ["asc", "desc"], orderable: !1,
            }, {
                data: "d", render: function (data, type, row) {
                    if (type != "display")
                        return data[0];
                    if (!data[0])
                        return '-';
                    if (row.fin)
                        return 'Finished';
                    str = data + '<rsmall>km &nbsp;</rsmall><small>(</small><b>' + row.lap + '</b><small>)</small>';
                    return str
                }, className: 'text-right text-nowrap ', "orderSequence": ["asc", "desc"], orderable: !1,
            }, {
                data: "wkg", render: function (data, type, row) {
                    if (type != "display")
                        return data[0];
                    data[1] = 0;
                    str = '<span>' + ZP_DATA_get_WKG(data, type, row) + '</span>';
                    text = '';
                    if (data[0] >= 4.8)
                        str = '<span class="text-red"><b>' + str + '</b></span>';
                    str = '<span >' + str + '</span>';
                    return str
                }, className: 'text-right text-nowrap ', "orderSequence": ["desc"], type: 'non-empty-string',
            }, {
                data: "avg_power",
                render: function (data, type, row) {
                    if (type != "display")
                        return data[0];
                    str = ZP_DATA_get_WKG_OR_WATTS(data, type, row) + '<BR>';
                    return str
                },
                className: 'text-center text-nowrap',
                "orderSequence": ["desc", "asc"],
                type: 'non-empty-string',
                orderable: !1,
            }, {
                data: "np",
                render: ZP_DATA_get_NP,
                className: 'text-center text-nowrap',
                "orderSequence": ["desc", "asc"],
                type: 'non-empty-string',
                orderable: !1,
            }, {
                data: "ahr",
                render: function (data, type, row) {
                    if (type != "display")
                        return data[0];
                    return ZP_DATA_get_HR(data, type, row);
                    return str
                },
                className: 'text-right text-nowrap',
                "orderSequence": ["desc", "asc"],
                type: 'non-empty-string',
                orderable: !1,
            }, {
                data: "weight",
                render: function (data, type, row) {
                    if (type != "display")
                        return data[0];
                    str = ZP_DATA_get_WEIGHT(data, type, row) + '<BR>';
                    return str
                },
                className: 'text-center text-nowrap',
                "orderSequence": ["desc", "asc"],
                type: 'non-empty-string',
                orderable: !1,
            }, {
                data: "pos_in_grp",
                className: 'text-center text-nowrap',
                type: 'non-empty-string',
                visible: !1,
                "orderable": !1,
            }, {
                data: "eta", render: function (data, type, row) {
                    if (type != "display")
                        return data;
                    if (!data)
                        str = ''; else str = convertSecondsToTime(data / 1000);
                    return str
                }, className: 'text-right text-nowrap ', "orderable": !1,
            }, {
                data: "age",
                render: ZP_DATA_get_AGE,
                visible: !0,
                className: 'text-right text-nowrap  valign_top',
                "orderSequence": ["desc", "asc"],
                type: 'non-empty-string',
                orderable: !1,
            }, {
                data: "h_1200_wkg", render: function (data, type, row) {
                    if (typeof (data) === 'undefined')
                        return '';
                    if (type != "display")
                        return data;
                    return data + '<rsmall> wkg</rsmall>'
                }, className: 'text-right text-nowrap ', "orderable": !0, "orderSequence": ["desc"],
            }, {
                data: "h_1200_watts", render: function (data, type, row) {
                    if (typeof (data) === 'undefined')
                        return '';
                    if (type != "display")
                        return data;
                    return data + '<rsmall> w</rsmall>'
                }, className: 'text-right text-nowrap ', "orderable": !0, "orderSequence": ["desc"],
            }, {
                data: "h_15_wkg", render: function (data, type, row) {
                    if (typeof (data) === 'undefined')
                        return '';
                    if (type != "display")
                        return data;
                    return data + '<rsmall> wkg</rsmall>'
                }, className: 'text-right text-nowrap ', "orderable": !0, "orderSequence": ["desc"],
            }, {
                data: "h_15_watts", render: function (data, type, row) {
                    if (typeof (data) === 'undefined')
                        return '';
                    if (type != "display")
                        return data;
                    return data + '<rsmall> w</rsmall>'
                }, className: 'text-right text-nowrap ', "orderable": !0, "orderSequence": ["desc"],
            }, {
                data: "b_wkg", render: function (data, type, row) {
                    if (typeof (data) === 'undefined')
                        return '';
                    if (type != "display")
                        return data;
                    return '<small>' + row.b_cnt + ' Riders <rsmall>@</rsmall> ' + row.b_wkg + '</small><rsmall> wkg</rsmall>'
                }, className: 'text-right text-nowrap ', "orderable": !1, "orderSequence": ["desc"],
            }, {data: "zid", visible: !1, orderable: !1,},],
            "paging": !0,
            "lengthMenu": [[25, 50, 100, -1], [25, 50, 100, "All"]],
            "pageLength": -1,
            "searching": !0,
            "language": {
                "lengthMenu": "_MENU_ riders <rsmall>(affects CPU load)</rsmall>",
                "zeroRecords": "Nothing found - sorry",
                "info": "Showing page _PAGE_ of _PAGES_",
                "infoEmpty": "No riders found",
            },
            "deferRender": !0,
            "order": [[1, "asc"]],
            "autoWidth": !1,
            "info": !0,
            "ordering": !0,
            "stateSave": !1,
            "select": !0,
            "drawCallback": function (settings) {
                var api = this.api();
                if (typeof (table[table_name]) == 'undefined')
                    return;
                if (!table[table_name].order())
                    return;
                var rows = api.rows({page: 'current'}).nodes();
                var last = null;
                var data = api.rows({page: 'current'}).data();
                var len = data.length;
                if (len > 1000)
                    len = 1000;
                if (ELEVATION_SUPPORTS_LIVE) {
                    var RIDE_LEADER_COUNT = 0;
                    for (var i = 0; i < 1000; i++) {
                        if (RIDER_LOCATIONS[i]) {
                            RIDER_LOCATIONS[i] = !1;
                            ELEVATION_GRAPH.removeAnnotation('rider_location_' + i)
                        }
                    }
                    for (var i = 0; i <= 5; i++) {
                        ELEVATION_GRAPH.removeAnnotation('rider_leader_location_' + i);
                        ELEVATION_GRAPH.removeAnnotation('rider_leader_location_pos_' + i);
                        ELEVATION_GRAPH.removeAnnotation('rider_leader_location_time_' + i);
                        ELEVATION_GRAPH.removeAnnotation('rider_leader_location_eta_' + i);
                        ELEVATION_GRAPH.removeAnnotation('rider_leader_location_count_' + i)
                    }
                    ELEVATION_GRAPH.removeAnnotation('rider_selected_location');
                    var RIDE_LEADER_DONE = [];
                    var distance = 0;
                    var ride_zindex = 10;
                    var LAST_RIDERS = [];
                    for (var i = 0; i < len; i++) {
                        rider_zindex = (2000 - data[i].pos_in_grp - data[i].label);
                        if (typeof (data[i].d2) === 'undefined')
                            distance = data[i].d * 1; else distance = data[i].d2;
                        if (data[i].d2 >= 100000)
                            continue;
                        if (LAST_RIDERS[data[i].label] && (LAST_RIDERS[data[i].label] - distance) < 0.2)
                            continue;
                        LAST_RIDERS[data[i].label] = distance;
                        RIDER_LOCATIONS[i] = !0;
                        ELEVATION_GRAPH.addAnnotation({
                            id: 'rider_location_' + i,
                            zIndex: rider_zindex,
                            shapes: [{
                                type: 'circle',
                                r: 4,
                                stroke: getCategoryHexFromLabel(data[i].label),
                                fill: getCategoryHexFromLabel(data[i].label),
                                point: {xAxis: 0, yAxis: 0, x: distance, y: findElevation(distance),},
                            }],
                        });
                        var height = $('#segment_graph').height();
                        if (!RIDE_LEADER_DONE[data[i].label] && RIDE_LEADER_COUNT < 5) {
                            if (data[i].position == 1)
                                str_time = ''; else str_time = '<small>+</small>' + convertSecondsToTime(data[i].time_diff / 1000);
                            if (data[i].b_cnt > 1)
                                str_count = data[i].b_cnt + ' riders'; else str_count = '1 rider';
                            str_eta = ''
                            if (data[i].eta > 0)
                                str_eta = convertSecondsToTime(data[i].eta / 1000);
                            if (typeof (data[i].d2) === 'undefined')
                                distance = data[i].d * 1; else distance = data[i].d2;
                            if (data[i].d2 < 100000) {
                                ELEVATION_GRAPH.addAnnotation({
                                    id: 'rider_leader_location_pos_' + data[i].label,
                                    zIndex: 3000,
                                    shapes: [{
                                        type: 'circle',
                                        r: 5,
                                        stroke: 'black',
                                        fill: getCategoryHexFromLabel(data[i].label),
                                        point: {xAxis: 0, yAxis: 0, x: distance, y: findElevation(distance),},
                                    }],
                                })
                            }
                            ELEVATION_GRAPH.addAnnotation({
                                id: 'rider_leader_location_' + data[i].label,
                                labelOptions: {
                                    verticalAlign: 'middle',
                                    y: ((RIDE_LEADER_COUNT) * 22) + 10,
                                    padding: 0,
                                    borderWidth: 0,
                                },
                                labels: [{
                                    useHTML: !0,
                                    shadow: !1,
                                    backgroundColor: 'transparent',
                                    color: 'transparent',
                                    point: {x: 10,},
                                    text: '<span class="label ' + ZP_get_category_color(data[i].label) + ' label-as-badge" style="font-size:10px;">' + get_LABELS_TO_CATS(data[i].label) + '</span> ',
                                },]
                            });
                            ELEVATION_GRAPH.addAnnotation({
                                id: 'rider_leader_location_count_' + data[i].label,
                                labelOptions: {
                                    verticalAlign: 'middle',
                                    y: ((RIDE_LEADER_COUNT) * 22) + 12,
                                    padding: 0,
                                    borderWidth: 0,
                                    backgroundColor: 'transparent',
                                },
                                labels: [{
                                    useHTML: !0,
                                    point: {x: 80,},
                                    style: {fontSize: '10px', color: 'black',},
                                    text: '<div style="width:100px;">' + str_count + '</div>'
                                },]
                            });
                            ELEVATION_GRAPH.addAnnotation({
                                id: 'rider_leader_location_time_' + data[i].label,
                                labelOptions: {
                                    verticalAlign: 'middle',
                                    y: ((RIDE_LEADER_COUNT) * 22) + 12,
                                    padding: 0,
                                    borderWidth: 0,
                                    backgroundColor: 'transparent',
                                },
                                labels: [{
                                    useHTML: !0,
                                    point: {x: 130,},
                                    style: {fontSize: '10px', color: 'black',},
                                    text: '<div style="width:100px;">' + str_time + '</div>'
                                },]
                            });
                            ELEVATION_GRAPH.addAnnotation({
                                id: 'rider_leader_location_eta_' + data[i].label,
                                labelOptions: {
                                    verticalAlign: 'middle',
                                    y: ((RIDE_LEADER_COUNT) * 22) + 12,
                                    padding: 0,
                                    borderWidth: 0,
                                    backgroundColor: 'transparent',
                                },
                                labels: [{
                                    useHTML: !0,
                                    point: {x: 200,},
                                    style: {fontSize: '10px', color: 'black',},
                                    text: '<div style="width:100px;">ETA: ' + str_eta + '</div>'
                                },]
                            });
                            RIDE_LEADER_DONE[data[i].label] = data[i].d;
                            RIDE_LEADER_COUNT++
                        }
                    }
                }
                api.column(20, {page: 'current'}).data().each(function (group, i) {
                    if (ZP_VARS.live_rider_selection[group]) {
                        ZP_VARS.live_selection++;
                        $(rows).eq(i).removeClass('odd');
                        $(rows).eq(i).removeClass('even');
                        if (ZP_VARS.live_only_show_selection) {
                            $(rows).eq(i).removeClass('liveselect');
                            $(rows).eq(i).addClass('liveselect_only')
                        } else {
                            $(rows).eq(i).removeClass('liveselect_only');
                            $(rows).eq(i).addClass('liveselect')
                        }
                    } else if (ZP_VARS.live_only_show_selection) {
                        $(rows).eq(i).hide()
                    }
                });
                api.column(2, {page: 'current'}).data().each(function (group, i) {
                    if (group == 1)
                        $(rows).eq(i).addClass('grey'); else if (group > 1) {
                        $(rows).eq(i).addClass('eliminated')
                    }
                })
            }
        });
        $('#table_live_results').on('xhr.dt', function () {
            next_live_update = update_period
        });
        table[table_name].on('select', function (e, dt, type, indexes) {
            if (type === 'row') {
                var data = table[table_name].rows(indexes).data().pluck('zid');
                next_live_update = 2;
                if (typeof (ZP_VARS.live_rider_selection[data[0]]) === 'undefined') {
                    ZP_VARS.live_rider_selection[data[0]] = !0
                } else ZP_VARS.live_rider_selection[data[0]] = !ZP_VARS.live_rider_selection[data[0]];
                if (!ZP_VARS.live_rider_selection[data[0]]) {
                    $('#table_live_results').find("tr").removeClass('liveselect');
                    $('#table_live_results').find("tr").removeClass('liveselect_only')
                } else {
                    $('#table_live_results').find("tr").removeClass('liveselect');
                    $('#table_live_results').find("tr").removeClass('liveselect_only');
                    table[table_name][type](indexes).nodes().to$().addClass('liveselect')
                }
            }
        });
        updateColumnChooser(table_name)
    })
}
$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    var id = $(e.target).attr('id');
    active_before = live_active;
    live_active = (id == 'tab_live') ? 1 : 0;
    if (live_active && active_before <= 0) {
        doLiveUpdate()
    }
});

function getCategoryHexFromLabel(label) {
    if (label <= 1)
        return '#dc4119';
    if (label == 2)
        return '#58c34e';
    if (label == 3)
        return '#3ec0e9';
    if (label == 4)
        return '#fccf0b';
    if (label >= 5)
        return '#943e5e'
}

function getCategoryRGBFromLabel(label) {
    if (label <= 1)
        return 'rgb(220,65,25,0.5)'
    if (label == 2)
        return '#58c34e';
    if (label == 3)
        return '#3ec0e9';
    if (label == 4)
        return '#fccf0b';
    if (label >= 5)
        return '#943e5e'
}

function displaySelectedRiderAnnotation(data) {
    ELEVATION_GRAPH.removeAnnotation('rider_selected_location');
    if (data.position == 1)
        str = convertSecondsToTime(data.race_time[0] / 1000); else str = '<small>+</small>' + convertSecondsToTime(data.time_diff / 1000);
    var rider_text = data.sname + '<rsmall> ' + str + '</rsmall>';
    ELEVATION_GRAPH.addAnnotation({
        zIndex: 99,
        id: 'rider_selected_location',
        labelOptions: {
            verticalAlign: 'middle',
            y: ELEVATION_GRAPH.plotHeight + 10,
            overflow: 'allow',
            crop: !1,
            padding: 2,
        },
        labels: [{
            useHTML: !0,
            backgroundColor: getCategoryHexFromLabel(data.label),
            point: {xAxis: 0, x: data.d2,},
            text: '<div style="padding-left:5px;padding-right:5px">' + rider_text + '</div>'
        },]
    })
};table_event_add_events = function (table_name) {
    $(document).ready(function () {
        url = "api3.php?do=race_history_future";
        table[table_name] = $('#' + table_name).DataTable({
            "ajax": url,
            "columns": [{
                data: "tm", render: function (data, type, row, obj) {
                    if (type != "display")
                        return data;
                    if (!data)
                        return '-';
                    str = getRelativeDate(data, ZP_VARS.timezone_offset, !0);
                    label = getGridLabel(str);
                    str = '<span class="text-' + label + '"> ' + str + ' </span>';
                    return str
                }, className: 'text-right text-nowrap', "orderSequence": ["desc", "asc"],
            }, {
                data: "tm", render: function (data, type, row, obj) {
                    if (type != "display")
                        return data;
                    if (!data)
                        return '-';
                    str = ZP_DATA_get_TIME_FROM_DATE(data, type, row, obj);
                    return str
                }, className: 'text-right text-nowrap', "orderable": !1,
            }, {
                data: "t",
                render: ZP_DATA_get_ZWIFT_EVENT_TITLE,
                className: 'text-left text-nowrap event_col',
                "orderSequence": ["asc", "desc"],
            }, {
                data: "r",
                render: ZP_DATA_get_RESULTS,
                className: 'text-right text-nowrap padright32',
                type: 'non-empty-string',
                "orderSequence": ["desc", "asc"],
            }, {
                data: "rid",
                render: ZP_DATA_get_RACE_ID,
                className: 'text-right text-nowrap padright32',
                type: 'non-empty-string',
                "orderSequence": ["asc", "desc"],
            }, {
                data: "rt",
                render: ZP_DATA_get_ROUTE,
                className: 'text-right text-nowrap padright32',
                type: 'non-empty-string',
                "orderSequence": ["desc", "asc"],
            }, {
                data: "km",
                render: function (data, type, row, obj) {
                    if (type != "display")
                        return data;
                    return ZP_DATA_get_DISTANCE(data, type, row, obj)
                },
                className: 'text-right text-nowrap padright32',
                type: 'non-empty-string',
                "orderSequence": ["desc", "asc"],
            }, {
                data: "laps", render: function (data, type, row, obj) {
                    if (type != "display")
                        return data;
                    if (row.dur > 0)
                        str = '<i class="fa fa-clock-o text-orange" aria-hidden="true"></i> ' + Math.round(row.dur / 60) + ''; else if (data <= 0)
                        str = ''; else if (data == 1)
                        str = data + ' lap'; else str = data + ' laps';
                    return str
                }, className: 'text-right text-nowrap width_compact', "orderSequence": ["desc", "asc"],
            }, {data: "cats", render: ZP_DATA_get_CATEGORIES, className: 'text-right text-nowrap', "orderable": !1,}, {
                data: "cats", render: function (data, type, row, obj) {
                    if (type != "display")
                        return data;
                    str = '<a class="" href="events.php?do=link_event&zid=' + ZP_VARS.zwift_event_id + '&linkid=' + row.zid + '"><button class="btn btn-success">Link Event</button></a>';
                    return str
                }, visible: !0,
            },],
            "paging": !0,
            "pageLength": 25,
            "searching": !0,
            "deferRender": !0,
            "order": [[0, "desc"]],
            "autoWidth": !1,
            "lengthChange": !1,
            "info": !0,
            "ordering": !0,
        })
    })
};
var last_open_row = null;
table_league_standings = function (table_name, league_id, time_based) {
    $(document).ready(function () {
        table[table_name] = $('#' + table_name).DataTable({
            "ajax": {
                "url": "cache3/global/league_standings_" + league_id + '.json', "dataSrc": function (json) {
                    ZP_VARS.TEAMS = new Array();
                    for (group in json.teams) {
                        ZP_VARS.TEAMS[group] = {
                            tname: json.teams[group].tname,
                            tbc: json.teams[group].tbc,
                            tbd: json.teams[group].tbd,
                            tc: json.teams[group].tc,
                        }
                    }
                    return json.data
                }
            },
            "initComplete": function (settings, json) {
                val = ZP_VARS.league_category_id;
                if (val.length > 1)
                    table.league_standings.column(0).search(val, !1, !1).draw(); else table.league_standings.column(0).search('^(' + val + ')$', !0, !1).draw()
            },
            "columns": [{
                data: "category", render: function (data, type, row, obj) {
                    if (type != "display")
                        return data;
                    str = ' <i class="fa fa-info-circle fa-2 text-green" aria-hidden="true"></i>';
                    str += ZP_DATA_get_NEW_CATEGORY(data, type, row, obj);
                    return str
                }, className: 'expand-rider-results info-expand text-right text-nowrap', "orderSequence": ["asc"],
            }, {
                data: "pos",
                render: ZP_DATA_get_POSITION_SIMPLE,
                className: 'text-right text-nowrap padright24',
                type: 'non-empty-string',
            }, {
                data: "name", render: function (data, type, row, obj) {
                    if (type != "display")
                        return data;
                    str = '';
                    str += ZP_DATA_get_NAME_WITH_TEAM_ARRAY(data, type, row, obj);
                    return str
                }, className: 'text-left text-nowrap athlete_col', "orderSequence": ["asc"],
            }, {
                data: "events", render: function (data, type, row, obj) {
                    if (type != "display")
                        return data;
                    if (data <= 0)
                        return '';
                    return data
                }, className: 'text-right text-nowrap padright24', type: 'non-empty-string', "orderSequence": ["desc"],
            }, {
                data: "points",
                render: function (data, type, row, obj) {
                    if (type != "display")
                        return data;
                    if (data <= 0)
                        return '';
                    if (time_based)
                        str = convertSecondsToTime(data / 1000); else str = data;
                    return str
                },
                className: 'text-right text-nowrap',
                type: 'non-empty-string',
                orderable: !0,
                "orderSequence": ["desc", "asc"],
            }, {
                data: "std",
                render: function (data, type, row, obj) {
                    if (type != "display")
                        return data;
                    if (time_based) {
                        if (data > 0)
                            str = '+' + convertSecondsToTime(data / 1000); else if (data < 0)
                            str = '-' + convertSecondsToTime(Math.abs(data / 1000)); else str = ''
                    } else str = data;
                    return str
                },
                className: 'text-right text-nowrap',
                type: 'non-empty-string',
                orderable: !0,
                "orderSequence": ["desc", "asc"],
                visible: (time_based) ? !0 : !1,
            }, {
                data: "history", render: function (data, type, row) {
                    if (type != "display")
                        return '-';
                    if (!data.length)
                        return '';
                    str = '';
                    for (i = 0; i < data.length; i++) {
                        if (data[i] > 0 && data[i] < 4)
                            str += ZP_DATA_get_POSITION_SIMPLE(data[i], 'display', data[i]); else str += "<i class='fa fa-fw'></i>"
                    }
                    return str
                }, className: 'text-left text-nowrap', type: 'non-empty-string', "orderSequence": ["desc"],
            }, {
                data: "rank", render: function (data, type, row, obj) {
                    if (type != "display")
                        return '-';
                    str = '';
                    if (data != '')
                        str = data; else if (row.events >= 3) {
                        str = parseInt(row.points) / parseInt(row.events);
                        str = str.toFixed(1)
                    }
                    return str
                }, className: 'text-right text-nowrap', type: 'non-empty-string', orderable: !1,
            }, {
                data: "age",
                render: ZP_DATA_get_AGE,
                className: 'text-right text-nowrap',
                type: 'non-empty-string',
                orderable: !0,
                "orderSequence": ["desc", "asc"],
                visible: !0,
            }, {
                data: "tid",
                className: 'text-right text-nowrap',
                type: 'non-empty-string',
                orderable: !1,
                visible: !1,
            },],
            "paging": !0,
            "pageLength": 20,
            "lengthChange": !1,
            "searching": !0,
            "deferRender": !0,
            "order": [[1, "asc"], [0, "asc"]],
            "autoWidth": !1,
            "lengthChange": !1,
            "info": !1,
            "sDom": "<'search_align_top'f>rtip",
            "ordering": !0,
        });
        $('#' + table_name).on('click', 'td.expand-rider-results', function () {
            var tr = $(this).closest('tr');
            var row = table[table_name].row(tr);
            last_open_row = row.child;
            if (row.child.isShown()) {
                row.child.hide();
                tr.removeClass('shown')
            } else {
                row.child(expand_rider_results(row.data()), time_based).show();
                tr.addClass('shown')
            }
        })
    })
}

function expand_rider_results(d, time_based) {
    URL = "api3.php?do=league_rider_results&id=" + ZP_VARS.league_id + '&zwid=' + d.zwid;
    $.ajax({
        url: URL, dataType: "json", error: function () {
            str = 'Could not locate rider results';
            last_open_row(str).show()
        }, success: function (data) {
            str = '<BR>';
            for (i = 0; i < data.data.length; i++) {
                if (data.data[i].exc)
                    str += '<span class="text-gray">';
                t = getRelativeDate(data.data[i].tm, ZP_VARS.timezone_offset, !0);
                label = getGridLabel(str);
                str += ' <i class="fa fa-info-circle fa-2 text-green" aria-hidden="true"></i>';
                str += '<span class="small text-' + label + '"> ' + t + ' - </span>';
                str += ' <b>' + data.data[i].t + '</b> ';
                str += ' (' + data.data[i].pts + ' pts)';
                str += '<BR><BR>';
                if (data.data[i].exc)
                    str += '</span>'
            }
            last_open_row(str).show()
        }
    });
    return 'Loading...'
}