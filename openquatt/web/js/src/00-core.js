(function () {
  const LOGO_MARKUP = `
    <img class="oq-helper-logo-mark" src="data:image/svg+xml;utf8,%3Csvg%20width=%22100%%22%20height=%22100%%22%20viewBox=%220%200%202680%20900%22%20version=%221.1%22%20xmlns=%22http://www.w3.org/2000/svg%22%20xmlns:xlink=%22http://www.w3.org/1999/xlink%22%20xml:space=%22preserve%22%20xmlns:serif=%22http://www.serif.com/%22%20style=%22fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;%22%3E%3Cg%3E%3Cpath%20d=%22M342.5,34.5C344.898,44.776%20347.898,54.776%20351.5,64.5C354.159,71.474%20356.826,78.474%20359.5,85.5C359.824,90.461%20361.491,94.794%20364.5,98.5C379.589,136.242%20397.089,172.909%20417,208.5C436.208,241.032%20456.208,273.032%20477,304.5C500.391,338.227%20523.391,372.227%20546,406.5C559.012,426.857%20570.179,448.19%20579.5,470.5C579.552,473.346%20580.552,475.68%20582.5,477.5C595.926,506.54%20603.426,537.207%20605,569.5C605.662,585.845%20605.495,602.178%20604.5,618.5C603.275,623.29%20602.608,628.29%20602.5,633.5C600.882,636.171%20600.215,639.171%20600.5,642.5C599.833,646.167%20599.167,649.833%20598.5,653.5C596.926,655.102%20596.259,657.102%20596.5,659.5L596.5,661.5C593.88,665.343%20592.213,669.676%20591.5,674.5C584.483,692.2%20576.15,709.2%20566.5,725.5C563.395,728.275%20561.062,731.608%20559.5,735.5C513.747,794.207%20454.081,828.873%20380.5,839.5C368.667,840.272%20357,841.272%20345.5,842.5C334.495,842.667%20323.495,842.5%20312.5,842C310.618,841.802%20308.952,841.302%20307.5,840.5C301.395,839.004%20295.062,838.337%20288.5,838.5L286.5,838.5C281.471,836.585%20276.137,835.585%20270.5,835.5C194.819,821.23%20137.319,780.897%2098,714.5C69.088,658.348%2060.088,599.014%2071,536.5C76.214,507.193%2085.214,479.193%2098,452.5C107.992,433.175%20118.992,414.508%20131,396.5C175.835,332.164%20219.168,266.83%20261,200.5C275.501,173.5%20289.501,146.167%20303,118.5C309.515,102.108%20316.182,85.775%20323,69.5C327.419,58.182%20331.086,46.516%20334,34.5C335.413,31.339%20337.08,28.339%20339,25.5C340.664,28.327%20341.83,31.327%20342.5,34.5Z%22%20style=%22fill:rgb(32,75,150);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M342.5,34.5C346.685,44.061%20349.685,54.061%20351.5,64.5C347.898,54.776%20344.898,44.776%20342.5,34.5Z%22%20style=%22fill:rgb(99,134,185);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M359.5,85.5C361.734,89.522%20363.401,93.856%20364.5,98.5C361.491,94.794%20359.824,90.461%20359.5,85.5Z%22%20style=%22fill:rgb(100,134,185);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M342.5,119.5C347.662,132.661%20352.329,145.995%20356.5,159.5C357.009,164.703%20358.676,169.37%20361.5,173.5L361.5,174.5C361.41,177.152%20362.076,179.485%20363.5,181.5C364.363,183.421%20365.029,185.421%20365.5,187.5C365.41,190.152%20366.076,192.485%20367.5,194.5C367.41,197.152%20368.076,199.485%20369.5,201.5C369.41,204.152%20370.076,206.485%20371.5,208.5C371.41,211.152%20372.076,213.485%20373.5,215.5C379.477,236.72%20383.811,258.387%20386.5,280.5C387.735,296.849%20389.235,313.182%20391,329.5C391.5,341.829%20391.667,354.162%20391.5,366.5L391.5,369.5C390.732,370.263%20390.232,371.263%20390,372.5C388.668,382.49%20387.501,392.49%20386.5,402.5C385.663,406.834%20385.163,411.168%20385,415.5C402.511,389.134%20412.345,360.134%20414.5,328.5C415.166,323.177%20415.499,317.677%20415.5,312C415.693,303.94%20415.027,296.107%20413.5,288.5C413.34,286.801%20413.506,285.134%20414,283.5C418.525,288.553%20422.025,294.219%20424.5,300.5C424.427,302.027%20425.094,303.027%20426.5,303.5C432.367,315.778%20438.033,328.112%20443.5,340.5C443.166,343.491%20444.166,345.824%20446.5,347.5C449.602,353.802%20451.936,360.469%20453.5,367.5C453.41,370.152%20454.076,372.485%20455.5,374.5C455.41,377.152%20456.076,379.485%20457.5,381.5C459.678,387.876%20461.011,394.543%20461.5,401.5C461.255,407.084%20461.922,412.417%20463.5,417.5C465.104,484.211%20437.437,534.878%20380.5,569.5C379.571,568.311%20379.238,566.978%20379.5,565.5C381.04,560.935%20381.707,556.102%20381.5,551C381.508,542.57%20380.508,534.403%20378.5,526.5C378.706,523.505%20378.04,520.838%20376.5,518.5C371.327,497.821%20362.16,479.154%20349,462.5C325.105,504.625%20306.438,548.958%20293,595.5C292,597.167%20291,598.833%20290,600.5C269.264,608.391%20247.764,613.558%20225.5,616C215.198,617.285%20204.865,618.118%20194.5,618.5C182.23,579.401%20181.397,540.068%20192,500.5C196.291,486.916%20201.958,473.916%20209,461.5C239.193,415.133%20266.86,367.133%20292,317.5C311.021,276.267%20324.521,233.267%20332.5,188.5C336.747,171.892%20339.08,154.892%20339.5,137.5C340.829,131.548%20341.829,125.548%20342.5,119.5Z%22%20style=%22fill:rgb(235,136,50);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M342.5,119.5C341.829,125.548%20340.829,131.548%20339.5,137.5C339.441,131.089%20340.108,124.756%20341.5,118.5C342.107,118.624%20342.44,118.957%20342.5,119.5Z%22%20style=%22fill:rgb(87,92,106);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M356.5,159.5C358.538,163.94%20360.204,168.607%20361.5,173.5C358.676,169.37%20357.009,164.703%20356.5,159.5Z%22%20style=%22fill:rgb(165,115,65);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M361.5,174.5C362.924,176.515%20363.59,178.848%20363.5,181.5C362.076,179.485%20361.41,177.152%20361.5,174.5Z%22%20style=%22fill:rgb(159,113,68);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M339.5,137.5C339.08,154.892%20336.747,171.892%20332.5,188.5C335.259,171.415%20337.592,154.415%20339.5,137.5Z%22%20style=%22fill:rgb(68,88,119);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M365.5,187.5C366.924,189.515%20367.59,191.848%20367.5,194.5C366.076,192.485%20365.41,190.152%20365.5,187.5Z%22%20style=%22fill:rgb(160,114,65);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M367.5,194.5C368.924,196.515%20369.59,198.848%20369.5,201.5C368.076,199.485%20367.41,197.152%20367.5,194.5Z%22%20style=%22fill:rgb(160,114,65);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M369.5,201.5C370.924,203.515%20371.59,205.848%20371.5,208.5C370.076,206.485%20369.41,204.152%20369.5,201.5Z%22%20style=%22fill:rgb(160,114,65);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M371.5,208.5C372.924,210.515%20373.59,212.848%20373.5,215.5C372.076,213.485%20371.41,211.152%20371.5,208.5Z%22%20style=%22fill:rgb(159,114,65);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M386.5,280.5C388.455,294.676%20390.288,309.009%20392,323.5C392.827,338.006%20392.661,352.339%20391.5,366.5C391.667,354.162%20391.5,341.829%20391,329.5C389.235,313.182%20387.735,296.849%20386.5,280.5Z%22%20style=%22fill:rgb(152,112,72);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M424.5,300.5C425.906,300.973%20426.573,301.973%20426.5,303.5C425.094,303.027%20424.427,302.027%20424.5,300.5Z%22%20style=%22fill:rgb(116,102,87);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M413.5,288.5C415.027,296.107%20415.693,303.94%20415.5,312C415.499,317.677%20415.166,323.177%20414.5,328.5C414.611,315.152%20414.277,301.819%20413.5,288.5Z%22%20style=%22fill:rgb(72,90,115);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M443.5,340.5C445.065,342.509%20446.065,344.843%20446.5,347.5C444.166,345.824%20443.166,343.491%20443.5,340.5Z%22%20style=%22fill:rgb(163,113,68);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M453.5,367.5C454.924,369.515%20455.59,371.848%20455.5,374.5C454.076,372.485%20453.41,370.152%20453.5,367.5Z%22%20style=%22fill:rgb(154,111,70);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M455.5,374.5C456.924,376.515%20457.59,378.848%20457.5,381.5C456.076,379.485%20455.41,377.152%20455.5,374.5Z%22%20style=%22fill:rgb(146,110,71);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M391.5,369.5C390.393,380.717%20388.726,391.717%20386.5,402.5C387.501,392.49%20388.668,382.49%20390,372.5C390.232,371.263%20390.732,370.263%20391.5,369.5Z%22%20style=%22fill:rgb(172,117,60);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M461.5,401.5C462.957,406.598%20463.624,411.931%20463.5,417.5C461.922,412.417%20461.255,407.084%20461.5,401.5Z%22%20style=%22fill:rgb(162,115,62);%22/%3E%3C/g%3E%3Cpath%20d=%22M770.5,570.5C770.624,558.467%20771.291,546.467%20772.5,534.5C784.157,497.354%20809.157,474.521%20847.5,466C880.205,459.456%20912.205,461.789%20943.5,473C982.389,491.928%201000.22,523.095%20997,566.5C993.473,609.041%20971.306,636.875%20930.5,650C898.056,657.651%20865.723,657.318%20833.5,649C795.64,636.312%20774.64,610.145%20770.5,570.5ZM871.5,499.5C850.829,501.845%20834.829,511.845%20823.5,529.5C817.349,545.355%20815.849,561.688%20819,578.5C827.176,602.001%20843.676,615.168%20868.5,618C880.872,618.843%20893.205,618.51%20905.5,617C916.036,614.068%20925.369,609.068%20933.5,602C947.743,586.159%20952.91,567.659%20949,546.5C945.933,530.572%20937.766,518.072%20924.5,509C907.738,501.231%20890.071,498.065%20871.5,499.5Z%22%20style=%22fill:rgb(58,137,243);%22/%3E%3Cg%3E%3Cpath%20d=%22M1730.5,462.5C1767.07,457.724%201800.07,466.224%201829.5,488C1854.6,510.952%201864.43,539.452%201859,573.5C1855.37,592.26%201846.87,608.426%201833.5,622C1843.36,630.945%201854.02,638.945%201865.5,646C1865.96,646.414%201866.29,646.914%201866.5,647.5C1855.27,655.867%201843.1,662.534%201830,667.5L1826.5,667C1817.17,658.83%201807.17,651.663%201796.5,645.5C1764.49,656.072%201732.16,657.239%201699.5,649C1657.04,634.356%201635.04,604.522%201633.5,559.5C1634.57,513.946%201656.57,483.78%201699.5,469C1709.73,465.721%201720.07,463.554%201730.5,462.5ZM1736.5,500.5C1734.03,501.317%201731.36,501.817%201728.5,502C1708.29,506.676%201694.12,518.51%201686,537.5C1677.76,564.709%201683.92,587.875%201704.5,607C1724.13,618.699%201744.8,620.699%201766.5,613C1766.96,612.586%201767.29,612.086%201767.5,611.5C1760.83,603.167%201754.17,594.833%201747.5,586.5C1757.11,584.807%201766.77,584.307%201776.5,585C1783.19,586.517%201788.86,589.85%201793.5,595C1794.83,595.667%201796.17,595.667%201797.5,595C1803.01,589.155%201806.84,582.321%201809,574.5C1816.34,548.188%201809.18,527.022%201787.5,511C1771.64,502.386%201754.64,498.886%201736.5,500.5Z%22%20style=%22fill:rgb(237,137,51);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M1567.5,469.5L1567.5,468.5L1613.5,468.5C1613.82,475.354%201613.49,482.021%201612.5,488.5L1612.5,469.5L1567.5,469.5Z%22%20style=%22fill:rgb(150,197,244);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M2250.5,648.5C2246.6,635.923%202241.93,623.589%202236.5,611.5L2148.5,611.5C2143.4,624.387%202138.06,637.221%202132.5,650C2115.84,650.5%202099.17,650.667%202082.5,650.5C2084.36,644.426%202086.52,638.426%202089,632.5C2113.11,579.272%202137.11,525.605%202161,471.5C2161.83,470.667%202162.67,469.833%202163.5,469C2181.5,468.333%202199.5,468.333%202217.5,469C2219.43,469.251%202221.27,469.751%202223,470.5C2249.4,530.543%202275.9,590.543%202302.5,650.5C2284.93,651.131%202267.6,650.464%202250.5,648.5ZM2191.5,506.5C2184.26,525.657%202176.43,544.657%202168,563.5C2166.19,568.435%202164.69,573.435%202163.5,578.5C2183.18,578.833%202202.84,578.5%202222.5,577.5C2212.84,555.691%202203.68,533.691%202195,511.5C2194.1,509.569%202192.93,507.903%202191.5,506.5Z%22%20style=%22fill:rgb(237,138,51);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M2485.5,469.5L2485.5,468.5L2665.5,468.5L2665.5,505.5L2597.5,505.5C2619.66,504.503%202641.99,504.169%202664.5,504.5L2664.5,469.5L2485.5,469.5Z%22%20style=%22fill:rgb(238,166,89);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M1140.5,469.5C1189.37,473.874%201212.21,500.541%201209,549.5C1203.39,574.448%201188.55,591.281%201164.5,600C1154.02,602.877%201143.36,604.544%201132.5,605C1111.84,605.5%201091.17,605.667%201070.5,605.5C1069.5,620.324%201069.17,635.324%201069.5,650.5L1026.5,650.5L1026.5,469.5L1140.5,469.5ZM1070.5,568.5C1088,569.662%201105.66,569.829%201123.5,569C1126.04,568.814%201128.37,568.314%201130.5,567.5C1143.25,567.715%201152.75,562.381%201159,551.5C1167.31,525.808%201158.15,510.641%201131.5,506C1111.17,505.5%201090.84,505.333%201070.5,505.5L1070.5,568.5Z%22%20style=%22fill:rgb(57,137,243);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M1280.5,592.5C1279.51,599.648%201279.18,606.981%201279.5,614.5L1391.5,614.5L1391.5,650.5C1339.62,651.155%201287.95,650.489%201236.5,648.5C1235.4,593.506%201235.24,538.506%201236,483.5C1236.17,478.798%201236.67,474.132%201237.5,469.5C1288.46,468.505%201339.46,468.171%201390.5,468.5L1390.5,505.5L1279.5,505.5L1279.5,543.5L1381.5,543.5L1381.5,577.5L1280.5,577.5L1280.5,592.5Z%22%20style=%22fill:rgb(59,138,243);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M1565.5,588.5C1565.78,589.289%201566.28,589.956%201567,590.5C1567.5,550.168%201567.67,509.835%201567.5,469.5L1612.5,469.5L1612.5,511.5C1611.5,557.664%201611.17,603.997%201611.5,650.5L1562.5,650.5C1557.11,644.758%201551.95,638.758%201547,632.5C1520.72,597.881%201494.05,563.547%201467,529.5C1466.5,569.832%201466.33,610.165%201466.5,650.5L1423.5,650.5C1423.74,649.209%201423.4,648.209%201422.5,647.5L1422.5,468.5C1438.86,468.217%201455.19,468.717%201471.5,470C1503.05,509.375%201534.38,548.875%201565.5,588.5Z%22%20style=%22fill:rgb(56,137,243);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M1567.5,468.5L1567.5,469.5C1567.67,509.835%201567.5,550.168%201567,590.5C1566.28,589.956%201565.78,589.289%201565.5,588.5C1566.17,548.5%201566.83,508.5%201567.5,468.5Z%22%20style=%22fill:rgb(207,231,249);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M1930.5,469.5C1931.33,507.331%201931.83,545.331%201932,583.5C1935.1,602.599%201946.27,613.766%201965.5,617C1976.97,618.124%201988.3,617.457%201999.5,615C2016.51,607.805%202025.18,594.972%202025.5,576.5C2026.5,541.004%202026.83,505.337%202026.5,469.5L2072.5,469.5L2072.5,585.5C2065.58,626.254%202041.58,649.087%202000.5,654C1983.83,654.667%201967.17,654.667%201950.5,654C1911.32,647.657%201889.32,624.823%201884.5,585.5L1884.5,469.5L1930.5,469.5Z%22%20style=%22fill:rgb(237,137,51);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M2072.5,585.5L2072.5,469.5L2026.5,469.5C2026.83,505.337%202026.5,541.004%202025.5,576.5L2025.5,468.5L2073.5,468.5C2073.83,507.67%202073.5,546.67%202072.5,585.5Z%22%20style=%22fill:rgb(241,189,131);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M2461.5,468.5C2462.92,469.451%202464.59,469.784%202466.5,469.5L2466.5,504.5C2442.33,504.169%202418.33,504.502%202394.5,505.5L2394.5,650.5L2348.5,650.5L2348.5,642.5C2349.5,596.67%202349.83,550.67%202349.5,504.5L2282.5,504.5L2282.5,469.5C2342.14,468.515%202401.81,468.182%202461.5,468.5Z%22%20style=%22fill:rgb(237,137,50);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M2485.5,469.5L2664.5,469.5L2664.5,504.5C2641.99,504.169%202619.66,504.503%202597.5,505.5L2597.5,650.5L2549.5,650.5L2549.5,505.5C2528.34,504.503%202507.01,504.169%202485.5,504.5L2485.5,469.5Z%22%20style=%22fill:rgb(237,137,50);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M579.5,470.5C581.065,472.509%20582.065,474.843%20582.5,477.5C580.552,475.68%20579.552,473.346%20579.5,470.5Z%22%20style=%22fill:rgb(115,147,192);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M2282.5,469.5L2282.5,504.5L2349.5,504.5C2349.83,550.67%202349.5,596.67%202348.5,642.5L2348.5,505.5L2281.5,505.5C2281.17,493.322%202281.5,481.322%202282.5,469.5Z%22%20style=%22fill:rgb(242,189,128);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M2461.5,468.5L2467.5,468.5L2467.5,505.5L2394.5,505.5C2418.33,504.502%202442.33,504.169%202466.5,504.5L2466.5,469.5C2464.59,469.784%202462.92,469.451%202461.5,468.5Z%22%20style=%22fill:rgb(242,189,130);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M2485.5,468.5L2485.5,504.5C2507.01,504.169%202528.34,504.503%202549.5,505.5L2484.5,505.5C2484.17,492.989%202484.5,480.655%202485.5,468.5Z%22%20style=%22fill:rgb(242,190,132);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M1930.5,469.5L1884.5,469.5L1884.5,585.5C1883.5,546.67%201883.17,507.67%201883.5,468.5C1899.34,468.17%201915.01,468.504%201930.5,469.5Z%22%20style=%22fill:rgb(237,158,73);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M376.5,518.5C378.04,520.838%20378.706,523.505%20378.5,526.5C377.232,524.095%20376.565,521.428%20376.5,518.5Z%22%20style=%22fill:rgb(87,94,104);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M378.5,526.5C380.508,534.403%20381.508,542.57%20381.5,551C381.707,556.102%20381.04,560.935%20379.5,565.5C379.633,552.484%20379.299,539.484%20378.5,526.5Z%22%20style=%22fill:rgb(85,90,113);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M772.5,534.5C771.291,546.467%20770.624,558.467%20770.5,570.5C769.343,562.344%20769.177,554.01%20770,545.5C770.419,541.608%20771.252,537.942%20772.5,534.5Z%22%20style=%22fill:rgb(133,185,245);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M557.5,586.5C558.058,587.79%20559.058,588.623%20560.5,589C522.875,585.446%20485.541,587.446%20448.5,595C434.071,598.718%20419.738,602.718%20405.5,607C370.079,620.14%20334.413,632.473%20298.5,644C273.593,650.707%20248.26,655.04%20222.5,657C190.507,659.068%20160.174,653.068%20131.5,639C123.345,633.67%20115.345,628.17%20107.5,622.5C105.421,616.1%20104.588,609.434%20105,602.5C116.716,610.408%20128.883,617.575%20141.5,624C155.181,628.731%20169.181,631.897%20183.5,633.5C212.901,636.3%20241.901,633.967%20270.5,626.5C281.24,624.319%20291.907,621.819%20302.5,619C334.064,607.256%20366.064,596.923%20398.5,588C425.538,580.804%20453.038,576.971%20481,576.5C507.102,575.435%20532.602,578.768%20557.5,586.5Z%22%20style=%22fill:rgb(129,203,242);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M557.5,586.5C562.457,587.989%20567.457,589.323%20572.5,590.5C564.464,682.071%20518.464,746.571%20434.5,784C365.129,810.657%20296.129,809.991%20227.5,782C160.3,749.489%20120.3,696.322%20107.5,622.5C115.345,628.17%20123.345,633.67%20131.5,639C160.174,653.068%20190.507,659.068%20222.5,657C248.26,655.04%20273.593,650.707%20298.5,644C334.413,632.473%20370.079,620.14%20405.5,607C419.738,602.718%20434.071,598.718%20448.5,595C485.541,587.446%20522.875,585.446%20560.5,589C559.058,588.623%20558.058,587.79%20557.5,586.5Z%22%20style=%22fill:rgb(56,136,242);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M1280.5,592.5L1280.5,613.5L1369.5,613.5L1369.5,614.5L1279.5,614.5C1279.18,606.981%201279.51,599.648%201280.5,592.5Z%22%20style=%22fill:rgb(201,224,248);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M604.5,618.5C604.698,623.75%20604.031,628.75%20602.5,633.5C602.608,628.29%20603.275,623.29%20604.5,618.5Z%22%20style=%22fill:rgb(166,187,215);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M270.5,626.5C241.901,633.967%20212.901,636.3%20183.5,633.5C201.187,633.711%20218.854,633.211%20236.5,632C247.833,630.055%20259.167,628.222%20270.5,626.5Z%22%20style=%22fill:rgb(58,111,176);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M602.5,633.5C602.785,636.829%20602.118,639.829%20600.5,642.5C600.215,639.171%20600.882,636.171%20602.5,633.5Z%22%20style=%22fill:rgb(131,159,199);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M1369.5,614.5L1369.5,613.5L1392.5,613.5L1392.5,651.5L1236.5,651.5L1236.5,648.5C1287.95,650.489%201339.62,651.155%201391.5,650.5L1391.5,614.5L1369.5,614.5Z%22%20style=%22fill:rgb(118,177,243);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M1422.5,647.5C1423.4,648.209%201423.74,649.209%201423.5,650.5L1466.5,650.5C1452.01,651.496%201437.34,651.829%201422.5,651.5L1422.5,647.5Z%22%20style=%22fill:rgb(152,199,248);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M1612.5,511.5L1612.5,651.5C1595.66,651.83%201578.99,651.497%201562.5,650.5L1611.5,650.5C1611.17,603.997%201611.5,557.664%201612.5,511.5Z%22%20style=%22fill:rgb(123,180,244);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M2394.5,505.5L2395.5,505.5L2395.5,651.5C2379.66,651.83%202363.99,651.496%202348.5,650.5L2394.5,650.5L2394.5,505.5Z%22%20style=%22fill:rgb(246,212,172);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M598.5,653.5C598.741,655.898%20598.074,657.898%20596.5,659.5C596.259,657.102%20596.926,655.102%20598.5,653.5Z%22%20style=%22fill:rgb(143,169,203);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M596.5,661.5C595.401,666.144%20593.734,670.478%20591.5,674.5C592.213,669.676%20593.88,665.343%20596.5,661.5Z%22%20style=%22fill:rgb(114,148,193);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M566.5,725.5C564.938,729.392%20562.605,732.725%20559.5,735.5C561.062,731.608%20563.395,728.275%20566.5,725.5Z%22%20style=%22fill:rgb(163,185,212);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M270.5,835.5C276.137,835.585%20281.471,836.585%20286.5,838.5C280.939,838.044%20275.606,837.044%20270.5,835.5Z%22%20style=%22fill:rgb(85,124,178);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M288.5,838.5C295.062,838.337%20301.395,839.004%20307.5,840.5C300.95,840.546%20294.617,839.879%20288.5,838.5Z%22%20style=%22fill:rgb(89,126,180);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M380.5,839.5C369.102,841.86%20357.435,842.86%20345.5,842.5C357,841.272%20368.667,840.272%20380.5,839.5Z%22%20style=%22fill:rgb(125,154,196);%22/%3E%3C/g%3E%3C/svg%3E" alt="OpenQuatt logo">
  `;
  const FIRMWARE_RELEASE_URLS = {
    main: "https://github.com/jeroen85/OpenQuatt/releases/latest",
    dev: "https://github.com/jeroen85/OpenQuatt/releases/tag/dev-latest",
  };
  const OFFICIAL_ESPHOME_UI_URL = "https://oi.esphome.io/v3/www.js";
  const ENTITY_REFRESH_CONCURRENCY = 4;
  const STRATEGY_OPTION_POWER_HOUSE = "Power House";
  const STRATEGY_OPTION_CURVE = "Water Temperature Control (heating curve)";

  const QUICK_STEPS = [
    {
      id: "strategy",
      kicker: "Stap 1",
      title: "Kies de verwarmingsstrategie",
      copy: "Kies hier hoe OpenQuatt je verwarming regelt. Daarna lopen we samen de belangrijkste instellingen langs.",
      fields: [
        {
          title: "Verwarmingsstrategie",
          copy: "Kies of OpenQuatt automatisch op je woning reageert, of werkt met een vaste stooklijn.",
        },
      ],
    },
    {
      id: "heating",
      kicker: "Stap 2",
      title: "Werk de regeling uit",
      copy: "Stel nu de gekozen regeling verder in. De inhoud hieronder past zich aan aan je keuze.",
      fields: [
        {
          title: "Instellingen voor jouw regeling",
          copy: "Je ziet hier alleen de instellingen die echt nodig zijn voor de gekozen regeling.",
        },
      ],
    },
    {
      id: "flow",
      kicker: "Stap 3",
      title: "Flow en pompregeling",
      copy: "Leg daarna vast hoe de pomp geregeld moet worden. Dit bepaalt of je een flowdoel of een vaste pompwaarde instelt.",
      fields: [
        {
          title: "Flowregeling",
          copy: "Kies of OpenQuatt de pomp automatisch regelt, of dat je zelf een vaste pompstand instelt.",
        },
      ],
    },
    {
      id: "water",
      kicker: "Stap 4",
      title: "Watertemperatuur beveiligen",
      copy: "Controleer de normale bovengrens en de tripgrens voor het watercircuit.",
      fields: [
        {
          title: "Watertemperatuur",
          copy: "Met deze grenzen voorkom je dat de watertemperatuur te hoog oploopt.",
        },
      ],
    },
    {
      id: "silent",
      kicker: "Stap 5",
      title: "Stille uren en niveaus",
      copy: "Stel daarna het stille venster en de compressorlimieten voor dag en nacht in.",
      fields: [
        {
          title: "Stille uren",
          copy: "Hier bepaal je wanneer het systeem rustiger moet werken.",
        },
      ],
    },
    {
      id: "confirm",
      kicker: "Stap 6",
      title: "Bevestigen en afronden",
      copy: "Controleer nog één keer je keuzes. Met afronden markeer je Quick Start als voltooid.",
      fields: [
        {
          title: "Afronden",
          copy: "Je instellingen zijn al opgeslagen. Deze stap markeert alleen dat Quick Start klaar is.",
        },
      ],
    },
  ];

  const ENTITY_DEFS = {
    setupComplete: { domain: "binary_sensor", name: "Setup Complete", optional: true },
    status: { domain: "binary_sensor", name: "Status", optional: true },
    firmwareUpdate: { domain: "update", name: "Firmware Update", optional: true },
    firmwareUpdateChannel: { domain: "select", name: "Firmware Update Channel", optional: true },
    firmwareUpdateProgress: { domain: "sensor", name: "Firmware Update Progress", optional: true },
    firmwareUpdateStatus: { domain: "text_sensor", name: "Firmware Update Status", optional: true },
    checkFirmwareUpdates: { domain: "button", name: "Check Firmware Updates", optional: true },
    restartAction: { domain: "button", name: "Restart", optional: true },
    uptime: { domain: "sensor", name: "Uptime", optional: true },
    uptimeReadable: { domain: "text_sensor", name: "Uptime readable", optional: true },
    uptimeReadableLegacy: { domain: "text_sensor", name: "Uptime", optional: true },
    ipAddress: { domain: "text_sensor", name: "IP Address", optional: true },
    wifiSsid: { domain: "text_sensor", name: "WiFi SSID", optional: true },
    projectVersionText: { domain: "text_sensor", name: "OpenQuatt Version", optional: true },
    releaseChannelText: { domain: "text_sensor", name: "OpenQuatt Release Channel", optional: true },
    wifiSignal: { domain: "sensor", name: "WiFi Signal", optional: true },
    espInternalTemp: { domain: "sensor", name: "ESP Internal Temperature", optional: true },
    strategy: { domain: "select", name: "Heating Control Mode" },
    openquattEnabled: { domain: "switch", name: "OpenQuatt Enabled", optional: true },
    manualCoolingEnable: { domain: "switch", name: "Manual Cooling Enable", optional: true },
    silentModeOverride: { domain: "select", name: "Silent Mode Override", optional: true },
    coolingEnableSelected: { domain: "binary_sensor", name: "Cooling Enable (Selected)", optional: true },
    coolingRequestActive: { domain: "binary_sensor", name: "Cooling Request Active", optional: true },
    coolingPermitted: { domain: "binary_sensor", name: "Cooling Permitted", optional: true },
    coolingBlockReason: { domain: "text_sensor", name: "Cooling Block Reason", optional: true },
    coolingGuardMode: { domain: "text_sensor", name: "Cooling Guard Mode", optional: true },
    coolingDewPointSelected: { domain: "sensor", name: "Cooling Dew Point (Selected)", optional: true },
    coolingMinimumSafeSupplyTemp: { domain: "sensor", name: "Cooling Minimum Safe Supply Temp", optional: true },
    coolingEffectiveMinSupplyTemp: { domain: "sensor", name: "Cooling Effective Minimum Supply Temp", optional: true },
    coolingFallbackNightMinOutdoorTemp: { domain: "sensor", name: "Cooling Fallback Night Minimum Outdoor Temp", optional: true },
    coolingFallbackMinSupplyTemp: { domain: "sensor", name: "Cooling Fallback Minimum Supply Temp", optional: true },
    coolingSupplyTarget: { domain: "sensor", name: "Cooling Supply Target", optional: true },
    coolingSupplyError: { domain: "sensor", name: "Cooling Supply Error", optional: true },
    coolingDemandRaw: { domain: "sensor", name: "Cooling Demand (raw)", optional: true },
    coolingWithoutDewPointMode: { domain: "select", name: "Cooling Without Dew Point", optional: true },
    flowControlMode: { domain: "select", name: "Flow Control Mode" },
    flowSetpoint: { domain: "number", name: "Flow Setpoint" },
    manualIpwm: { domain: "number", name: "Manual iPWM" },
    controlModeLabel: { domain: "text_sensor", name: "Control Mode (Label)" },
    flowMode: { domain: "text_sensor", name: "Flow Mode" },
    dayMax: { domain: "number", name: "Day max level" },
    silentMax: { domain: "number", name: "Silent max level" },
    silentStartTime: { domain: "time", name: "Silent start time" },
    silentEndTime: { domain: "time", name: "Silent end time" },
    openquattResumeAt: { domain: "datetime", name: "OpenQuatt resume at", optional: true },
    maxWater: { domain: "number", name: "Maximum water temperature" },
    minRuntime: { domain: "number", name: "Minimum runtime" },
    totalPower: { domain: "sensor", name: "Total Power Input" },
    heatingPowerInput: { domain: "sensor", name: "Heating Power Input", optional: true },
    coolingPowerInput: { domain: "sensor", name: "Cooling Power Input", optional: true },
    totalCop: { domain: "sensor", name: "Total COP" },
    totalEer: { domain: "sensor", name: "Total EER", optional: true },
    totalHeat: { domain: "sensor", name: "Total Heat Power" },
    totalCoolingPower: { domain: "sensor", name: "Total Cooling Power", optional: true },
    boilerHeatPower: { domain: "sensor", name: "Boiler Heat Power", optional: true },
    systemHeatPower: { domain: "sensor", name: "System Heat Power", optional: true },
    flowSelected: { domain: "sensor", name: "Flow average (Selected)" },
    electricalEnergyDaily: { domain: "sensor", name: "Electrical Energy Daily", optional: true },
    electricalEnergyCumulative: { domain: "sensor", name: "Electrical Energy Cumulative", optional: true },
    heatingElectricalEnergyDaily: { domain: "sensor", name: "Heating Electrical Energy Daily", optional: true },
    heatingElectricalEnergyCumulative: { domain: "sensor", name: "Heating Electrical Energy Cumulative", optional: true },
    coolingElectricalEnergyDaily: { domain: "sensor", name: "Cooling Electrical Energy Daily", optional: true },
    coolingElectricalEnergyCumulative: { domain: "sensor", name: "Cooling Electrical Energy Cumulative", optional: true },
    heatpumpThermalEnergyDaily: { domain: "sensor", name: "HeatPump Thermal Energy Daily", optional: true },
    heatpumpThermalEnergyCumulative: { domain: "sensor", name: "HeatPump Thermal Energy Cumulative", optional: true },
    heatpumpCoolingEnergyDaily: { domain: "sensor", name: "HeatPump Cooling Energy Daily", optional: true },
    heatpumpCoolingEnergyCumulative: { domain: "sensor", name: "HeatPump Cooling Energy Cumulative", optional: true },
    heatpumpCopDaily: { domain: "sensor", name: "HeatPump COP Daily", optional: true },
    heatpumpCopCumulative: { domain: "sensor", name: "HeatPump COP Cumulative", optional: true },
    heatpumpEerDaily: { domain: "sensor", name: "HeatPump EER Daily", optional: true },
    heatpumpEerCumulative: { domain: "sensor", name: "HeatPump EER Cumulative", optional: true },
    boilerThermalEnergyDaily: { domain: "sensor", name: "Boiler Thermal Energy Daily", optional: true },
    boilerThermalEnergyCumulative: { domain: "sensor", name: "Boiler Thermal Energy Cumulative", optional: true },
    systemThermalEnergyDaily: { domain: "sensor", name: "System Thermal Energy Daily", optional: true },
    systemThermalEnergyCumulative: { domain: "sensor", name: "System Thermal Energy Cumulative", optional: true },
    roomTemp: { domain: "sensor", name: "Room Temperature (Selected)" },
    roomSetpoint: { domain: "sensor", name: "Room Setpoint (Selected)" },
    supplyTemp: { domain: "sensor", name: "Water Supply Temp (Selected)" },
    outsideTempSelected: { domain: "sensor", name: "Outside Temperature (Selected)", optional: true },
    curveSupplyTarget: { domain: "sensor", name: "Heating Curve Supply Target" },
    strategyRequestedPower: { domain: "sensor", name: "Strategy requested power", optional: true },
    hpCapacity: { domain: "sensor", name: "HP capacity (W)", optional: true },
    hpDeficit: { domain: "sensor", name: "HP deficit (W)", optional: true },
    phouseHouse: { domain: "sensor", name: "Power House – P_house", optional: true },
    phouseReq: { domain: "sensor", name: "Power House – P_req", optional: true },
    silentActive: { domain: "binary_sensor", name: "Silent active" },
    stickyActive: { domain: "binary_sensor", name: "Sticky pump active" },
    housePower: { domain: "number", name: "Rated maximum house power" },
    houseColdTemp: { domain: "number", name: "House cold temp" },
    houseOutdoorMax: { domain: "number", name: "Maximum heating outdoor temperature" },
    phResponseProfile: { domain: "select", name: "Power House response profile" },
    phKp: { domain: "number", name: "Power House temperature reaction" },
    phComfortBelow: { domain: "number", name: "Power House comfort below setpoint" },
    phComfortAbove: { domain: "number", name: "Power House comfort above setpoint" },
    phDemandRiseTime: { domain: "number", name: "Power House demand rise time" },
    phDemandFallTime: { domain: "number", name: "Power House demand fall time" },
    curveControlProfile: { domain: "select", name: "Heating Curve Control Profile" },
    curveFallbackSupply: { domain: "number", name: "Curve Fallback Tsupply (No Outside Temp)" },
    curveM20: { domain: "number", name: "Curve Tsupply @ -20°C" },
    curveM10: { domain: "number", name: "Curve Tsupply @ -10°C" },
    curve0: { domain: "number", name: "Curve Tsupply @ 0°C" },
    curve5: { domain: "number", name: "Curve Tsupply @ 5°C" },
    curve10: { domain: "number", name: "Curve Tsupply @ 10°C" },
    curve15: { domain: "number", name: "Curve Tsupply @ 15°C" },
    hp1ExcludedA: { domain: "select", name: "HP1 - Excluded compressor level A" },
    hp1ExcludedB: { domain: "select", name: "HP1 - Excluded compressor level B" },
    hp1Power: { domain: "sensor", name: "HP1 - Power Input" },
    hp1Heat: { domain: "sensor", name: "HP1 - Heat Power" },
    hp1Cooling: { domain: "sensor", name: "HP1 - Cooling Power" },
    hp1Cop: { domain: "sensor", name: "HP1 - COP" },
    hp1Compressor: { domain: "sensor", name: "HP1 compressor level" },
    hp1Freq: { domain: "sensor", name: "HP1 - Compressor frequency" },
    hp1FanSpeed: { domain: "sensor", name: "HP1 - Fan speed" },
    hp1Flow: { domain: "sensor", name: "HP1 - Flow" },
    hp1EvaporatorCoilTemp: { domain: "sensor", name: "HP1 - Evaporator coil temperature" },
    hp1InnerCoilTemp: { domain: "sensor", name: "HP1 - Inner coil temperature" },
    hp1OutsideTemp: { domain: "sensor", name: "HP1 - Outside temperature" },
    hp1CondenserPressure: { domain: "sensor", name: "HP1 - Condenser pressure" },
    hp1DischargeTemp: { domain: "sensor", name: "HP1 - Gas discharge temperature" },
    hp1EvaporatorPressure: { domain: "sensor", name: "HP1 - Evaporator pressure" },
    hp1ReturnTemp: { domain: "sensor", name: "HP1 - Gas return temperature" },
    hp1WaterIn: { domain: "sensor", name: "HP1 - Water in temperature" },
    hp1WaterOut: { domain: "sensor", name: "HP1 - Water out temperature" },
    hp1Mode: { domain: "text_sensor", name: "HP1 - Working Mode Label" },
    hp1Failures: { domain: "text_sensor", name: "HP1 - Active Failures List" },
    hp1Defrost: { domain: "binary_sensor", name: "HP1 - Defrost" },
    hp1BottomPlate: { domain: "binary_sensor", name: "HP1 - Bottom plate heater" },
    hp1Crankcase: { domain: "binary_sensor", name: "HP1 - Crankcase heater" },
    hp1Eev: { domain: "sensor", name: "HP1 - EEV steps" },
    hp1FourWay: { domain: "binary_sensor", name: "HP1 - 4-Way valve" },
    hp2ExcludedA: { domain: "select", name: "HP2 - Excluded compressor level A", optional: true },
    hp2ExcludedB: { domain: "select", name: "HP2 - Excluded compressor level B", optional: true },
    hp2Power: { domain: "sensor", name: "HP2 - Power Input", optional: true },
    hp2Heat: { domain: "sensor", name: "HP2 - Heat Power", optional: true },
    hp2Cooling: { domain: "sensor", name: "HP2 - Cooling Power", optional: true },
    hp2Cop: { domain: "sensor", name: "HP2 - COP", optional: true },
    hp2Compressor: { domain: "sensor", name: "HP2 compressor level", optional: true },
    hp2Freq: { domain: "sensor", name: "HP2 - Compressor frequency", optional: true },
    hp2FanSpeed: { domain: "sensor", name: "HP2 - Fan speed", optional: true },
    hp2Flow: { domain: "sensor", name: "HP2 - Flow", optional: true },
    hp2EvaporatorCoilTemp: { domain: "sensor", name: "HP2 - Evaporator coil temperature", optional: true },
    hp2InnerCoilTemp: { domain: "sensor", name: "HP2 - Inner coil temperature", optional: true },
    hp2OutsideTemp: { domain: "sensor", name: "HP2 - Outside temperature", optional: true },
    hp2CondenserPressure: { domain: "sensor", name: "HP2 - Condenser pressure", optional: true },
    hp2DischargeTemp: { domain: "sensor", name: "HP2 - Gas discharge temperature", optional: true },
    hp2EvaporatorPressure: { domain: "sensor", name: "HP2 - Evaporator pressure", optional: true },
    hp2ReturnTemp: { domain: "sensor", name: "HP2 - Gas return temperature", optional: true },
    hp2WaterIn: { domain: "sensor", name: "HP2 - Water in temperature", optional: true },
    hp2WaterOut: { domain: "sensor", name: "HP2 - Water out temperature", optional: true },
    hp2Mode: { domain: "text_sensor", name: "HP2 - Working Mode Label", optional: true },
    hp2Failures: { domain: "text_sensor", name: "HP2 - Active Failures List", optional: true },
    hp2Defrost: { domain: "binary_sensor", name: "HP2 - Defrost", optional: true },
    hp2BottomPlate: { domain: "binary_sensor", name: "HP2 - Bottom plate heater", optional: true },
    hp2Crankcase: { domain: "binary_sensor", name: "HP2 - Crankcase heater", optional: true },
    hp2Eev: { domain: "sensor", name: "HP2 - EEV steps", optional: true },
    hp2FourWay: { domain: "binary_sensor", name: "HP2 - 4-Way valve", optional: true },
    apply: { domain: "button", name: "Complete setup" },
    reset: { domain: "button", name: "Reset setup state" },
  };

  const QUICK_START_VIEW = "quickstart";
  const APP_VIEWS = [
    { id: QUICK_START_VIEW, label: "Quick Start" },
    { id: "overview", label: "Overzicht" },
    { id: "energy", label: "Energie" },
    { id: "settings", label: "Instellingen" },
  ];
  const APP_VIEW_IDS = new Set(APP_VIEWS.map((view) => view.id));
  const HP_PANEL_CONFIGS = [
    {
      title: "HP1",
      accent: "blue",
      keys: {
        power: "hp1Power",
        heat: "hp1Heat",
        cooling: "hp1Cooling",
        cop: "hp1Cop",
        freq: "hp1Freq",
        fanSpeed: "hp1FanSpeed",
        flow: "hp1Flow",
        evaporatorCoilTemp: "hp1EvaporatorCoilTemp",
        innerCoilTemp: "hp1InnerCoilTemp",
        outsideTemp: "hp1OutsideTemp",
        condenserPressure: "hp1CondenserPressure",
        dischargeTemp: "hp1DischargeTemp",
        evaporatorPressure: "hp1EvaporatorPressure",
        returnTemp: "hp1ReturnTemp",
        waterIn: "hp1WaterIn",
        waterOut: "hp1WaterOut",
        mode: "hp1Mode",
        failures: "hp1Failures",
        defrost: "hp1Defrost",
        bottomPlate: "hp1BottomPlate",
        crankcase: "hp1Crankcase",
        eev: "hp1Eev",
        fourWay: "hp1FourWay",
      },
    },
    {
      title: "HP2",
      accent: "orange",
      keys: {
        power: "hp2Power",
        heat: "hp2Heat",
        cooling: "hp2Cooling",
        cop: "hp2Cop",
        freq: "hp2Freq",
        fanSpeed: "hp2FanSpeed",
        flow: "hp2Flow",
        evaporatorCoilTemp: "hp2EvaporatorCoilTemp",
        innerCoilTemp: "hp2InnerCoilTemp",
        outsideTemp: "hp2OutsideTemp",
        condenserPressure: "hp2CondenserPressure",
        dischargeTemp: "hp2DischargeTemp",
        evaporatorPressure: "hp2EvaporatorPressure",
        returnTemp: "hp2ReturnTemp",
        waterIn: "hp2WaterIn",
        waterOut: "hp2WaterOut",
        mode: "hp2Mode",
        failures: "hp2Failures",
        defrost: "hp2Defrost",
        bottomPlate: "hp2BottomPlate",
        crankcase: "hp2Crankcase",
        eev: "hp2Eev",
        fourWay: "hp2FourWay",
      },
    },
  ];

  const CURVE_POINTS = [
    { key: "curveM20", outdoor: -20, label: "-20°C" },
    { key: "curveM10", outdoor: -10, label: "-10°C" },
    { key: "curve0", outdoor: 0, label: "0°C" },
    { key: "curve5", outdoor: 5, label: "5°C" },
    { key: "curve10", outdoor: 10, label: "10°C" },
    { key: "curve15", outdoor: 15, label: "15°C" },
  ];

  const POWER_HOUSE_KEYS = [
    "housePower",
    "houseColdTemp",
    "houseOutdoorMax",
    "phResponseProfile",
    "phKp",
    "phComfortBelow",
    "phComfortAbove",
    "phDemandRiseTime",
    "phDemandFallTime",
  ];
  const LIMIT_KEYS = ["dayMax", "silentMax", "maxWater"];
  const FLOW_SETTING_KEYS = ["flowControlMode", "flowSetpoint", "manualIpwm"];
  const COOLING_SETTING_KEYS = [
    "coolingWithoutDewPointMode",
    "coolingGuardMode",
    "coolingFallbackNightMinOutdoorTemp",
    "coolingFallbackMinSupplyTemp",
    "coolingEffectiveMinSupplyTemp",
  ];
  const CURVE_SETTING_KEYS = [...CURVE_POINTS.map((point) => point.key), "curveFallbackSupply", "curveControlProfile"];
  const COMPRESSOR_SETTING_KEYS = ["minRuntime", "hp1ExcludedA", "hp1ExcludedB", "hp2ExcludedA", "hp2ExcludedB"];
  const SILENT_SETTING_KEYS = ["silentStartTime", "silentEndTime", "silentMax", "dayMax"];
  const FIRMWARE_ENTITY_KEYS = ["firmwareUpdate", "firmwareUpdateChannel", "firmwareUpdateProgress", "firmwareUpdateStatus"];
  const FIRMWARE_MODAL_KEYS = [...FIRMWARE_ENTITY_KEYS, "projectVersionText", "releaseChannelText"];
  const HEADER_ENTITY_KEYS = [
    "status",
    "uptime",
    "uptimeReadable",
    "uptimeReadableLegacy",
    "ipAddress",
    "wifiSsid",
    "wifiSignal",
    "projectVersionText",
    "releaseChannelText",
    "espInternalTemp",
  ];
  const OVERVIEW_KEYS = [
    "strategy",
    "openquattEnabled",
    "openquattResumeAt",
    "manualCoolingEnable",
    "silentModeOverride",
    "coolingEnableSelected",
    "coolingRequestActive",
    "coolingPermitted",
    "coolingBlockReason",
    "coolingGuardMode",
    "coolingDewPointSelected",
    "coolingMinimumSafeSupplyTemp",
    "coolingEffectiveMinSupplyTemp",
    "coolingFallbackNightMinOutdoorTemp",
    "coolingFallbackMinSupplyTemp",
    "coolingSupplyTarget",
    "coolingSupplyError",
    "coolingDemandRaw",
    "controlModeLabel",
    "flowMode",
    "totalPower",
    "heatingPowerInput",
    "coolingPowerInput",
    "totalCop",
    "totalEer",
    "totalHeat",
    "totalCoolingPower",
    "strategyRequestedPower",
    "phouseHouse",
    "phouseReq",
    "hpCapacity",
    "boilerHeatPower",
    "systemHeatPower",
    "electricalEnergyDaily",
    "electricalEnergyCumulative",
    "heatingElectricalEnergyDaily",
    "heatingElectricalEnergyCumulative",
    "coolingElectricalEnergyDaily",
    "coolingElectricalEnergyCumulative",
    "heatpumpThermalEnergyDaily",
    "heatpumpThermalEnergyCumulative",
    "heatpumpCoolingEnergyDaily",
    "heatpumpCoolingEnergyCumulative",
    "heatpumpCopDaily",
    "heatpumpCopCumulative",
    "heatpumpEerDaily",
    "heatpumpEerCumulative",
    "boilerThermalEnergyDaily",
    "boilerThermalEnergyCumulative",
    "systemThermalEnergyDaily",
    "systemThermalEnergyCumulative",
    "flowSelected",
    "roomTemp",
    "roomSetpoint",
    "supplyTemp",
    "curveSupplyTarget",
    "silentActive",
    "stickyActive",
    "hp1Power",
    "hp1Heat",
    "hp1Cooling",
    "hp1Cop",
    "hp1Compressor",
    "hp1Freq",
    "hp1FanSpeed",
    "hp1Flow",
    "hp1EvaporatorCoilTemp",
    "hp1InnerCoilTemp",
    "hp1OutsideTemp",
    "hp1CondenserPressure",
    "hp1DischargeTemp",
    "hp1EvaporatorPressure",
    "hp1ReturnTemp",
    "hp1WaterIn",
    "hp1WaterOut",
    "hp1Mode",
    "hp1Failures",
    "hp1Defrost",
    "hp1BottomPlate",
    "hp1Crankcase",
    "hp1Eev",
    "hp1FourWay",
    "hp2Power",
    "hp2Heat",
    "hp2Cooling",
    "hp2Cop",
    "hp2Compressor",
    "hp2Freq",
    "hp2FanSpeed",
    "hp2Flow",
    "hp2EvaporatorCoilTemp",
    "hp2InnerCoilTemp",
    "hp2OutsideTemp",
    "hp2CondenserPressure",
    "hp2DischargeTemp",
    "hp2EvaporatorPressure",
    "hp2ReturnTemp",
    "hp2WaterIn",
    "hp2WaterOut",
    "hp2Mode",
    "hp2Failures",
    "hp2Defrost",
    "hp2BottomPlate",
    "hp2Crankcase",
    "hp2Eev",
    "hp2FourWay",
  ];
  const OVERVIEW_ENERGY_COLUMN_CONFIGS = [
    {
      label: "Nu",
      tone: "blue",
      categories: [
        {
          title: "Verwarmen",
          tone: "orange",
          groups: [
            { title: "Warmtepomp", rows: [["Elektrisch vermogen", "heatingPowerInput"], ["Warmteafgifte", "totalHeat"], ["COP", "totalCop"]] },
            { title: "CV-ketel", rows: [["Warmteafgifte", "boilerHeatPower"]] },
            { title: "Systeem", rows: [["Warmteafgifte", "systemHeatPower"]] },
          ],
        },
        {
          title: "Koelen",
          tone: "blue",
          groups: [
            { title: "Warmtepomp", rows: [["Elektrisch vermogen", "coolingPowerInput"], ["Koelafgifte", "totalCoolingPower"], ["COP (EER)", "totalEer"]] },
          ],
        },
      ],
    },
    {
      label: "Vandaag",
      tone: "orange",
      categories: [
        {
          title: "Verwarmen",
          tone: "orange",
          groups: [
            { title: "Warmtepomp", rows: [["Elektriciteit", "heatingElectricalEnergyDaily"], ["Warmte", "heatpumpThermalEnergyDaily"], ["COP", "heatpumpCopDaily"]] },
            { title: "CV-ketel", rows: [["Warmte", "boilerThermalEnergyDaily"]] },
            { title: "Systeem", rows: [["Warmte", "systemThermalEnergyDaily"]] },
          ],
        },
        {
          title: "Koelen",
          tone: "blue",
          groups: [
            { title: "Warmtepomp", rows: [["Elektriciteit", "coolingElectricalEnergyDaily"], ["Koeling", "heatpumpCoolingEnergyDaily"], ["COP (EER)", "heatpumpEerDaily"]] },
          ],
        },
      ],
    },
    {
      label: "Cumulatief",
      tone: "green",
      categories: [
        {
          title: "Verwarmen",
          tone: "orange",
          groups: [
            { title: "Warmtepomp", rows: [["Elektriciteit", "heatingElectricalEnergyCumulative"], ["Warmte", "heatpumpThermalEnergyCumulative"], ["COP", "heatpumpCopCumulative"]] },
            { title: "CV-ketel", rows: [["Warmte", "boilerThermalEnergyCumulative"]] },
            { title: "Systeem", rows: [["Warmte", "systemThermalEnergyCumulative"]] },
          ],
        },
        {
          title: "Koelen",
          tone: "blue",
          groups: [
            { title: "Warmtepomp", rows: [["Elektriciteit", "coolingElectricalEnergyCumulative"], ["Koeling", "heatpumpCoolingEnergyCumulative"], ["COP (EER)", "heatpumpEerCumulative"]] },
          ],
        },
      ],
    },
  ];
  const SETTINGS_KEYS = [
    "strategy",
    "openquattEnabled",
    "manualCoolingEnable",
    "silentModeOverride",
    ...FLOW_SETTING_KEYS,
    ...COOLING_SETTING_KEYS,
    ...LIMIT_KEYS,
    ...POWER_HOUSE_KEYS,
    ...CURVE_SETTING_KEYS,
    ...COMPRESSOR_SETTING_KEYS,
    ...SILENT_SETTING_KEYS,
  ];
  const POLL_INTERVAL_MS = 4000;
  const FLOW_DASH_CYCLE_PX = 22;
  const FLOW_OFFSET_PX_PER_SEC = FLOW_DASH_CYCLE_PX / 1.7;
  const FAN_ROTATION_DEG_PER_SEC = 360 / 3.2;
  const OPENQUATT_RESUME_CLEAR_VALUE = "2000-01-01 00:00:00";

  const state = {
    mounted: false,
    root: null,
    nativeApp: null,
    nativeFrontendLoaded: false,
    nativeFrontendLoading: false,
    pollTimer: null,
    summary: "",
    stage: "Laden...",
    interfacePanelOpen: getStoredInterfacePanelOpen(),
    devPanelOpen: getStoredDevPanelOpen(),
    nativeOpen: getStoredSurface() === "native",
    currentStep: "strategy",
    appView: "",
    overviewTheme: getStoredOverviewTheme(),
    hpVisualMode: getStoredHpVisualMode(),
    hpLayoutMode: getStoredHpLayoutMode(),
    busyAction: "",
    controlError: "",
    controlNotice: "",
    complete: false,
    loadingEntities: true,
    entities: {},
    settingsInfoOpen: "",
    settingsInteractionLock: false,
    quickStartRenderSignature: "",
    settingsRenderSignature: "",
    headerRenderSignature: "",
    drafts: {},
    inputDrafts: {},
    focusedField: "",
    updateModalOpen: false,
    systemModal: "",
    updateCheckBusy: false,
    updateInstallBusy: false,
    updateInstallTargetVersion: "",
    updateInstallPhaseHint: "",
    updateInstallProgressHint: Number.NaN,
    updateInstallCompleted: false,
    updateInstallCompletedVersion: "",
    pauseResumeDraft: "",
    draggingCurveKey: "",
    motionFrame: 0,
    motionStartedAt: 0,
    motionTargets: {
      pipeFlows: [],
      fanBlades: [],
    },
  };

  function getStoredOverviewTheme() {
    try {
      return window.localStorage.getItem("oq-overview-theme") === "dark" ? "dark" : "light";
    } catch (_error) {
      return "light";
    }
  }

  function setOverviewTheme(theme) {
    state.overviewTheme = theme === "dark" ? "dark" : "light";
    try {
      window.localStorage.setItem("oq-overview-theme", state.overviewTheme);
    } catch (_error) {
      // Ignore storage failures in embedded browsers.
    }
  }

  function getStoredInterfacePanelOpen() {
    try {
      return window.localStorage.getItem("oq-interface-panel-open") !== "false";
    } catch (_error) {
      return true;
    }
  }

  function setInterfacePanelOpen(open) {
    state.interfacePanelOpen = open !== false;
    try {
      window.localStorage.setItem("oq-interface-panel-open", state.interfacePanelOpen ? "true" : "false");
    } catch (_error) {
      // Ignore storage failures in embedded browsers.
    }
  }

  function getStoredSurface() {
    try {
      return window.localStorage.getItem("oq-active-surface") === "native" ? "native" : "app";
    } catch (_error) {
      return "app";
    }
  }

  function setStoredSurface(surface) {
    try {
      window.localStorage.setItem("oq-active-surface", surface === "native" ? "native" : "app");
    } catch (_error) {
      // Ignore storage failures in embedded browsers.
    }
  }

  function getStoredDevPanelOpen() {
    try {
      return window.localStorage.getItem("oq-dev-panel-open") === "true";
    } catch (_error) {
      return false;
    }
  }

  function setDevPanelOpen(open) {
    state.devPanelOpen = open === true;
    try {
      window.localStorage.setItem("oq-dev-panel-open", state.devPanelOpen ? "true" : "false");
    } catch (_error) {
      // Ignore storage failures in embedded browsers.
    }
  }

  function getStoredHpVisualMode() {
    try {
      return window.localStorage.getItem("oq-hp-visual-mode") === "compact" ? "compact" : "schematic";
    } catch (_error) {
      return "schematic";
    }
  }

  function setHpVisualMode(mode) {
    state.hpVisualMode = mode === "compact" ? "compact" : "schematic";
    try {
      window.localStorage.setItem("oq-hp-visual-mode", state.hpVisualMode);
    } catch (_error) {
      // Ignore storage failures in embedded browsers.
    }
  }

  function getStoredHpLayoutMode() {
    try {
      const stored = window.localStorage.getItem("oq-hp-layout-mode");
      return stored === "focus-hp1" || stored === "focus-hp2" ? stored : "equal";
    } catch (_error) {
      return "equal";
    }
  }

  function setHpLayoutMode(mode) {
    state.hpLayoutMode = mode === "focus-hp1" || mode === "focus-hp2" ? mode : "equal";
    try {
      window.localStorage.setItem("oq-hp-layout-mode", state.hpLayoutMode);
    } catch (_error) {
      // Ignore storage failures in embedded browsers.
    }
  }

  function getDefaultAppView() {
    return state.complete ? "overview" : QUICK_START_VIEW;
  }

  function hasLoadedEntities() {
    return Object.keys(state.entities).length > 0;
  }

  function stopMotionLoop() {
    if (state.motionFrame) {
      window.cancelAnimationFrame(state.motionFrame);
      state.motionFrame = 0;
    }
    state.motionStartedAt = 0;
    clearLegacyMotionVariables();
  }

  function startEntityPolling() {
    if (!state.pollTimer) {
      state.pollTimer = window.setInterval(syncEntities, POLL_INTERVAL_MS);
    }
  }

  function stopEntityPolling() {
    if (!state.pollTimer) {
      return;
    }
    window.clearInterval(state.pollTimer);
    state.pollTimer = null;
  }

  function syncSurfaceRuntime(options = {}) {
    syncNativeVisibility();
    if (state.nativeOpen) {
      stopEntityPolling();
      stopMotionLoop();
      if (!state.nativeFrontendLoaded) {
        void ensureNativeFrontendLoaded();
      }
      return;
    }

    startMotionLoop();
    startEntityPolling();

    if (options.refresh === false) {
      return;
    }
    if (!hasLoadedEntities()) {
      void primeEntities();
      return;
    }
    void syncEntities();
  }

  function normalizeAppView(view) {
    return APP_VIEW_IDS.has(view) ? view : "";
  }

  function getUrlAppView() {
    try {
      const url = new URL(window.location.href);
      const queryView = normalizeAppView(url.searchParams.get("view") || "");
      if (queryView) {
        return queryView;
      }

      const hashView = normalizeAppView(url.hash.replace(/^#/, ""));
      return hashView || "";
    } catch (_error) {
      return "";
    }
  }

  function syncUrlAppView(mode = "replace") {
    try {
      const url = new URL(window.location.href);
      const normalized = normalizeAppView(state.appView) || getDefaultAppView();
      url.searchParams.set("view", normalized);
      if (url.hash && normalizeAppView(url.hash.replace(/^#/, ""))) {
        url.hash = "";
      }

      const method = mode === "push" ? "pushState" : "replaceState";
      window.history[method]({ oqView: normalized }, "", url.toString());
    } catch (_error) {
      // Ignore history failures in embedded browsers.
    }
  }

  function setAppView(view, options = {}) {
    const normalized = normalizeAppView(view) || getDefaultAppView();
    const mode = options.syncMode || "replace";
    const changed = state.appView !== normalized;
    state.appView = normalized;

    if (changed || options.forceSync) {
      syncUrlAppView(mode);
    }
  }

  function handlePopState() {
    const nextView = getUrlAppView() || getDefaultAppView();
    if (nextView === state.appView) {
      return;
    }

    state.appView = nextView;
    render();
    void syncEntities();
  }

  function syncNativeVisibility() {
    if (!state.nativeApp) {
      return;
    }

    state.nativeApp.classList.add("oq-native-app");
    state.nativeApp.classList.toggle("oq-native-app--collapsed", !state.nativeOpen);
    state.nativeApp.setAttribute("aria-hidden", state.nativeOpen ? "false" : "true");
  }

  function boot() {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", mountWhenReady, { once: true });
    } else {
      mountWhenReady();
    }
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("popstate", handlePopState);
    window.addEventListener("oq-mock-updated", handleMockUpdated);
    window.addEventListener("oq-dev-controls-changed", handleDevControlsChanged);
  }

  function handleMockUpdated() {
    if (!state.mounted) {
      return;
    }
    void syncEntities();
  }

  function handleDevControlsChanged() {
    if (!state.mounted) {
      return;
    }
    render();
  }

  function mountWhenReady() {
    ensureViewportMeta();
    let app = document.querySelector("esp-app");
    if (!app) {
      app = document.createElement("esp-app");
      document.body.appendChild(app);
    }

    state.nativeApp = app;
    state.nativeFrontendLoaded = Array.from(document.scripts).some((script) => script.src === OFFICIAL_ESPHOME_UI_URL);

    if (!state.mounted) {
      mountPanel(app);
      state.mounted = true;
      syncSurfaceRuntime();
    }

    syncNativeVisibility();
    if (!state.nativeOpen) {
      void syncEntities();
    }
  }

  function ensureViewportMeta() {
    if (!document.head) {
      return;
    }

    let viewport = document.head.querySelector('meta[name="viewport"]');
    if (!viewport) {
      viewport = document.createElement("meta");
      viewport.name = "viewport";
      document.head.appendChild(viewport);
    }
    viewport.setAttribute("content", "width=device-width, initial-scale=1");
  }

  function mountPanel(app) {
    const root = document.createElement("section");
    root.id = "oq-helper-root";
    root.lang = "nl-NL";
    if (document.documentElement && !document.documentElement.lang) {
      document.documentElement.lang = "nl-NL";
    }
    app.parentNode.insertBefore(root, app);
    root.addEventListener("click", handleClick);
    root.addEventListener("change", handleChange);
    root.addEventListener("input", handleInput);
    root.addEventListener("focusin", handleFocusChange);
    root.addEventListener("focusout", handleFocusChange);
    root.addEventListener("mouseover", handleSettingsInteractionStart);
    root.addEventListener("mouseout", handleSettingsInteractionEnd);
    root.addEventListener("pointerdown", handlePointerDown);
    state.root = root;
    const initialUrlView = getUrlAppView();
    if (initialUrlView) {
      setAppView(initialUrlView, { syncMode: "replace", forceSync: true });
    }
    clearLegacyMotionVariables();
    startMotionLoop();
    render();
  }

  function loadScriptOnce(src) {
    return new Promise((resolve, reject) => {
      if (!src) {
        resolve();
        return;
      }

      const existing = Array.from(document.scripts).find((script) => script.src === src);
      if (existing) {
        if (existing.dataset.loaded === "true") {
          resolve();
          return;
        }

        existing.addEventListener("load", () => resolve(), { once: true });
        existing.addEventListener("error", (event) => reject(event), { once: true });
        return;
      }

      const script = document.createElement("script");
      script.src = src;
      script.async = false;
      script.addEventListener("load", () => {
        script.dataset.loaded = "true";
        resolve();
      }, { once: true });
      script.addEventListener("error", (event) => reject(event), { once: true });
      document.head.appendChild(script);
    });
  }

  async function ensureNativeFrontendLoaded() {
    if (state.nativeFrontendLoaded || state.nativeFrontendLoading) {
      return;
    }

    state.nativeFrontendLoading = true;
    if (state.nativeOpen) {
      render();
    }
    try {
      await loadScriptOnce(OFFICIAL_ESPHOME_UI_URL);
      state.nativeFrontendLoaded = true;
    } catch (error) {
      state.controlError = `ESPHome fallback kon niet worden geladen. ${error.message || error}`;
      state.nativeOpen = false;
      setStoredSurface("app");
      render();
      syncSurfaceRuntime();
    } finally {
      state.nativeFrontendLoading = false;
      if (state.nativeOpen) {
        render();
      }
    }
  }

  function bindHeaderDevControls() {
    if (!state.root) {
      return;
    }
    const controls = typeof window !== "undefined" ? window.__OQ_DEV_CONTROLS__ : null;
    if (!controls || typeof controls.bind !== "function") {
      return;
    }
    controls.bind(state.root);
  }

  function clearLegacyMotionVariables() {
    if (!state.root) {
      return;
    }

    state.root.style.removeProperty("--oq-flow-offset");
    state.root.style.removeProperty("--oq-flow-offset-reverse");
    state.root.style.removeProperty("--oq-fan-rotation");
    if (!state.root.getAttribute("style")) {
      state.root.removeAttribute("style");
    }
  }

  function refreshMotionTargets() {
    state.motionTargets = {
      pipeFlows: [],
      fanBlades: [],
    };

    if (!state.root) {
      return;
    }

    const runningBoards = state.root.querySelectorAll(".oq-hp-schematic-board.is-running");
    runningBoards.forEach((board) => {
      board.querySelectorAll(".oq-hp-tech-pipe-flow").forEach((node) => {
        state.motionTargets.pipeFlows.push(node);
      });
    });

    const fanBoards = state.root.querySelectorAll(".oq-hp-schematic-board.is-fan-running");
    fanBoards.forEach((board) => {
      board.querySelectorAll(".oq-hp-tech-fan-blades").forEach((node) => {
        state.motionTargets.fanBlades.push(node);
      });
    });
  }

  function syncMotionVariables(now = performance.now()) {
    if (!state.root) {
      return;
    }

    if (state.motionTargets.pipeFlows.length === 0
      && state.motionTargets.fanBlades.length === 0) {
      refreshMotionTargets();
    }

    if (!state.motionStartedAt) {
      state.motionStartedAt = now;
    }

    const elapsedSeconds = (now - state.motionStartedAt) / 1000;
    const fanRotation = (elapsedSeconds * FAN_ROTATION_DEG_PER_SEC) % 360;

    state.motionTargets.pipeFlows.forEach((node) => {
      const speedMultiplier = node.dataset.oqFlowVariant === "water" ? 0.42 : 1;
      const nodeOffset = -(elapsedSeconds * FLOW_OFFSET_PX_PER_SEC * speedMultiplier);
      node.style.strokeDashoffset = `${nodeOffset.toFixed(3)}px`;
    });
    state.motionTargets.fanBlades.forEach((node) => {
      node.style.transform = `rotate(${fanRotation.toFixed(3)}deg)`;
    });
  }

  function tickMotion(now) {
    syncMotionVariables(now);
    state.motionFrame = window.requestAnimationFrame(tickMotion);
  }

  function startMotionLoop() {
    if (state.motionFrame) {
      return;
    }

    const now = performance.now();
    state.motionStartedAt = now;
    syncMotionVariables(now);
    state.motionFrame = window.requestAnimationFrame(tickMotion);
  }

  function getBasePath() {
    const path = window.location.pathname.replace(/\/$/, "");
    return path === "" ? "" : path;
  }

  function buildEntityPath(domain, name, action = "") {
    const suffix = action ? `/${action}` : "";
    return `${getBasePath()}/${domain}/${encodeURIComponent(name)}${suffix}`;
  }

  function isCurveMode(value = getEntityValue("strategy")) {
    return String(value || "").includes("Water Temperature Control");
  }

  function isManualFlowMode(value = getEntityValue("flowControlMode")) {
    return String(value || "").toLowerCase().includes("manual");
  }

  function isCustomPowerHouseProfile(value = getEntityValue("phResponseProfile")) {
    return String(value || "").toLowerCase().includes("custom");
  }

  function getDeviceMeta() {
    const meta = typeof window !== "undefined" && window.__OQ_DEV_META && typeof window.__OQ_DEV_META === "object"
      ? window.__OQ_DEV_META
      : {};
    return meta;
  }

  function getInstallationLabel() {
    const installation = String(getDeviceMeta().installation || "").toLowerCase();
    if (installation === "single") {
      return "Quatt Single";
    }
    if (installation === "duo") {
      return "Quatt Duo";
    }
    return hasEntity("hp2Power") ? "Quatt Duo" : "Quatt Single";
  }

  function getFirmwareDeviceLabel() {
    return "OpenQuatt";
  }

  function formatDeviceClock() {
    try {
      return new Intl.DateTimeFormat("nl-NL", {
        hour: "2-digit",
        minute: "2-digit",
      }).format(new Date());
    } catch (_error) {
      return new Date().toLocaleTimeString("nl-NL", { hour: "2-digit", minute: "2-digit" });
    }
  }

  function formatDurationFromMinutes(totalMinutes) {
    if (!Number.isFinite(totalMinutes) || totalMinutes < 0) {
      return "—";
    }
    const wholeMinutes = Math.floor(totalMinutes);
    const days = Math.floor(wholeMinutes / 1440);
    const hours = Math.floor((wholeMinutes % 1440) / 60);
    const minutes = wholeMinutes % 60;
    if (days > 0) {
      return `${days}d ${hours}u`;
    }
    if (hours > 0) {
      return `${hours}u ${minutes}m`;
    }
    return `${minutes}m`;
  }

  function getNumericEntityUnit(entity) {
    return String(entity?.uom ?? entity?.unit_of_measurement ?? "").trim().toLowerCase();
  }

  function getNumericEntityValue(entity) {
    const rawState = entity?.state;
    if (rawState !== "" && rawState !== null && rawState !== undefined) {
      const numericState = Number(rawState);
      if (Number.isFinite(numericState)) {
        return numericState;
      }
    }
    const rawValue = entity?.value;
    const numericValue = Number(rawValue);
    return Number.isFinite(numericValue) ? numericValue : NaN;
  }

  function formatUptimeFromMeta() {
    const uptimeValue = getNumericEntityValue(state.entities.uptime);
    if (Number.isFinite(uptimeValue) && uptimeValue >= 0) {
      const uptimeUnit = getNumericEntityUnit(state.entities.uptime);
      if (uptimeUnit === "d") {
        return formatDurationFromMinutes(uptimeValue * 1440);
      }
      if (uptimeUnit === "h") {
        return formatDurationFromMinutes(uptimeValue * 60);
      }
      if (uptimeUnit === "s") {
        return formatDurationFromMinutes(uptimeValue / 60);
      }
    }
    const uptimeText = String(
      state.entities.uptimeReadable?.state
      ?? state.entities.uptimeReadable?.value
      ?? state.entities.uptimeReadableLegacy?.state
      ?? state.entities.uptimeReadableLegacy?.value
      ?? ""
    ).trim();
    if (uptimeText && uptimeText.toLowerCase() !== "unknown") {
      return uptimeText;
    }
    const bootedAt = Number(getDeviceMeta().bootedAt);
    if (!Number.isFinite(bootedAt) || bootedAt <= 0) {
      return "—";
    }
    return formatDurationFromMinutes((Date.now() - bootedAt) / 60000);
  }

  function getDeviceIpAddress() {
    const entityText = String(state.entities.ipAddress?.state ?? state.entities.ipAddress?.value ?? "").trim();
    if (entityText) {
      return entityText;
    }
    const explicit = String(getDeviceMeta().ipAddress || "").trim();
    if (explicit) {
      return explicit;
    }
    const host = typeof window !== "undefined" ? String(window.location.hostname || "").trim() : "";
    return host || "—";
  }

  function getUpdateStatus() {
    if (isFirmwareUpdateChecking()) {
      return "Controleren";
    }
    const progress = getFirmwareProgressModel();
    if (progress) {
      return progress.phaseLabel;
    }
    if (isFirmwareUpdateJustCompleted()) {
      return "Bijgewerkt";
    }
    if (isFirmwareUpdateInstalling()) {
      return "Bezig";
    }
    if (isFirmwareUpdateAvailable()) {
      return "Beschikbaar";
    }
    const relation = getFirmwareVersionRelation();
    if (relation !== null && relation <= 0) {
      return "Actueel";
    }
    const meta = getDeviceMeta();
    if (typeof meta.updateLabel === "string" && meta.updateLabel.trim()) {
      return meta.updateLabel.trim();
    }
    if (meta.updateAvailable === true) {
      return "Beschikbaar";
    }
    if (meta.updateAvailable === false) {
      return "Actueel";
    }
    if (isFirmwareEffectivelyCurrent()) {
      return "Actueel";
    }
    if (getFirmwareUpdateEntity()) {
      return "Nog niet gecontroleerd";
    }
    return "—";
  }

  function getFirmwareUpdateEntity() {
    return state.entities.firmwareUpdate || null;
  }

  function getFirmwareUpdateState() {
    const entity = getFirmwareUpdateEntity();
    if (!entity) {
      return "";
    }
    return String(entity.state ?? entity.value ?? "").trim().toLowerCase();
  }

  function getFirmwareProgressPhaseRaw() {
    const entity = state.entities.firmwareUpdateStatus;
    if (!entity) {
      return "";
    }
    return String(entity.state ?? entity.value ?? "").trim();
  }

  function getFirmwareProgressPhase() {
    return getFirmwareProgressPhaseRaw().toLowerCase();
  }

  function getFirmwareProgressPercent() {
    const entity = state.entities.firmwareUpdateProgress;
    if (!entity) {
      return Number.NaN;
    }
    const numeric = Number(entity.value ?? entity.state);
    if (Number.isNaN(numeric)) {
      return Number.NaN;
    }
    return Math.max(0, Math.min(100, numeric));
  }

  function hasInstalledFirmwareTargetVersion() {
    const target = String(state.updateInstallTargetVersion || "").trim();
    const current = getFirmwareCurrentVersion();
    if (!target || !current) {
      return false;
    }
    return compareFirmwareVersions(current, target) >= 0;
  }

  function hasInstalledFirmwareLatestVersion(entity = getFirmwareUpdateEntity() || {}) {
    const latest = getFirmwareLatestVersion(entity);
    const current = getFirmwareCurrentVersion(entity);
    if (!latest || !current) {
      return false;
    }
    return compareFirmwareVersions(current, latest) >= 0;
  }

  function isFirmwareInstallSettled() {
    return (hasInstalledFirmwareTargetVersion() || hasInstalledFirmwareLatestVersion())
      && !isFirmwareUpdateChecking()
      && !isFirmwareProgressActive()
      && !isFirmwareUpdateAvailable();
  }

  function isFirmwareUpdateJustCompleted() {
    return (state.updateInstallCompleted || isFirmwareInstallSettled())
      && !isFirmwareUpdateChecking()
      && !getFirmwareProgressModel()
      && !isFirmwareUpdateAvailable();
  }

  function resetFirmwareInstallUiState() {
    state.updateInstallBusy = false;
    state.updateInstallTargetVersion = "";
    state.updateInstallPhaseHint = "";
    state.updateInstallProgressHint = Number.NaN;
  }

  function syncFirmwareInstallHints() {
    const phase = getFirmwareProgressPhase();
    const percent = getFirmwareProgressPercent();

    if (phase === "starting" || phase === "uploading" || phase === "rebooting") {
      state.updateInstallPhaseHint = phase;
      if (!Number.isNaN(percent)) {
        state.updateInstallProgressHint = phase === "rebooting"
          ? Math.max(percent, 100)
          : percent;
      }
      return;
    }

    if (!state.updateInstallBusy) {
      return;
    }

    if (hasInstalledFirmwareTargetVersion()) {
      state.updateInstallPhaseHint = "rebooting";
      state.updateInstallProgressHint = 100;
      return;
    }

    if (state.controlNotice.includes("opnieuw is opgestart")) {
      state.updateInstallPhaseHint = "rebooting";
      state.updateInstallProgressHint = 100;
    }
  }

  function isFirmwareProgressActive() {
    const phase = getFirmwareProgressPhase();
    return phase === "starting" || phase === "uploading" || phase === "rebooting";
  }

  function getFirmwareProgressModel() {
    syncFirmwareInstallHints();

    const livePhase = getFirmwareProgressPhase();
    const hasLivePhase = livePhase === "starting" || livePhase === "uploading" || livePhase === "rebooting";
    const phase = hasLivePhase ? livePhase : state.updateInstallPhaseHint;
    const rawPercent = getFirmwareProgressPercent();
    const hintedPercent = Number.isNaN(state.updateInstallProgressHint) ? 0 : Math.round(state.updateInstallProgressHint);
    const basePercent = hasLivePhase && !Number.isNaN(rawPercent) ? Math.round(rawPercent) : hintedPercent;

    if (!isFirmwareProgressActive() && !state.updateInstallBusy) {
      return null;
    }

    if (phase === "rebooting") {
      return {
        phaseLabel: "Herstarten",
        percent: Math.max(basePercent, 100),
        copy: "Firmware is geplaatst. Het device start nu opnieuw op en komt daarna vanzelf terug.",
      };
    }

    if (phase === "uploading") {
      return {
        phaseLabel: "Uploaden",
        percent: basePercent,
        copy: `Firmware wordt nu naar ${getFirmwareDeviceLabel()} verzonden.`,
      };
    }

    return {
      phaseLabel: "Installeren",
      percent: basePercent,
      copy: `OTA-update is gestart voor ${getFirmwareDeviceLabel()}.`,
    };
  }

  function getFirmwareLatestVersion(entity = getFirmwareUpdateEntity() || {}) {
    const latest = String(entity.latest_version || "").trim();
    if (latest) {
      return latest;
    }
    const value = String(entity.value || "").trim();
    const current = String(entity.current_version || "").trim();
    if (value && value !== current && /^v/i.test(value)) {
      return value;
    }
    return "";
  }

  function getFirmwareCurrentVersion(entity = getFirmwareUpdateEntity() || {}) {
    const runningVersion = String(
      state.entities.projectVersionText?.state
      || state.entities.projectVersionText?.value
      || ""
    ).trim();
    if (runningVersion) {
      return runningVersion;
    }
    return String(entity.current_version || "").trim();
  }

  function hasFirmwareBootedIntoNewerVersion(entity = getFirmwareUpdateEntity() || {}) {
    const runningVersion = getFirmwareCurrentVersion(entity);
    const recordedVersion = String(entity.current_version || "").trim();
    if (!runningVersion || !recordedVersion || runningVersion === recordedVersion) {
      return false;
    }
    return compareFirmwareVersions(runningVersion, recordedVersion) > 0;
  }

  function isFirmwareEntityAlignedWithChannel(entity = getFirmwareUpdateEntity() || {}, channel = getFirmwareChannelLabel()) {
    const normalizedChannel = String(channel || "").trim().toLowerCase();
    const releaseUrl = String(entity.release_url || "").trim().toLowerCase();
    const latest = getFirmwareLatestVersion(entity).toLowerCase();

    if (!normalizedChannel || normalizedChannel === "—") {
      return true;
    }

    if (normalizedChannel === "dev") {
      if (releaseUrl) {
        if (releaseUrl.includes("/dev-latest")) {
          return true;
        }
        if (latest) {
          return latest.includes("-dev");
        }
      }
      return latest ? latest.includes("-dev") : false;
    }

    if (normalizedChannel === "main") {
      if (releaseUrl) {
        if (releaseUrl.includes("/dev-latest")) {
          return false;
        }
        if (latest) {
          return !latest.includes("-dev");
        }
      }
      return latest ? !latest.includes("-dev") : false;
    }

    return true;
  }

  function parseFirmwareVersion(version) {
    const raw = String(version || "").trim();
    const match = raw.match(/^v?(\d+)\.(\d+)\.(\d+)(?:-([A-Za-z]+)(?:\.(\d+))?)?/);
    if (!match) {
      return null;
    }
    return {
      major: Number(match[1]),
      minor: Number(match[2]),
      patch: Number(match[3]),
      prereleaseTag: match[4] || "",
      prereleaseNumber: match[5] ? Number(match[5]) : null,
    };
  }

  function compareFirmwareVersions(left, right) {
    const a = parseFirmwareVersion(left);
    const b = parseFirmwareVersion(right);
    if (!a || !b) {
      return 0;
    }
    if (a.major !== b.major) {
      return a.major > b.major ? 1 : -1;
    }
    if (a.minor !== b.minor) {
      return a.minor > b.minor ? 1 : -1;
    }
    if (a.patch !== b.patch) {
      return a.patch > b.patch ? 1 : -1;
    }
    const aStable = !a.prereleaseTag;
    const bStable = !b.prereleaseTag;
    if (aStable !== bStable) {
      return aStable ? 1 : -1;
    }
    if (a.prereleaseTag !== b.prereleaseTag) {
      return a.prereleaseTag > b.prereleaseTag ? 1 : -1;
    }
    if (a.prereleaseNumber !== b.prereleaseNumber) {
      return (a.prereleaseNumber || 0) > (b.prereleaseNumber || 0) ? 1 : -1;
    }
    return 0;
  }

  function isFirmwareUpdateInstalling() {
    if (isFirmwareInstallSettled()) {
      return false;
    }
    const raw = getFirmwareUpdateState();
    return state.updateInstallBusy
      || raw === "installing"
      || raw === "in_progress"
      || raw === "updating"
      || raw.includes("install");
  }

  function isFirmwareUpdateChecking() {
    const raw = getFirmwareUpdateState();
    return state.updateCheckBusy
      || raw === "checking"
      || raw === "check"
      || raw === "checking_for_update"
      || raw.includes("checking");
  }

  function isFirmwareUpdateAvailable() {
    const raw = getFirmwareUpdateState();
    if (!isFirmwareEntityAlignedWithChannel()) {
      return false;
    }
    const relation = getFirmwareVersionRelation();
    if (relation !== null) {
      return relation > 0;
    }
    if (
      raw === "installed"
      || raw === "current"
      || raw === "up_to_date"
      || raw === "none"
      || raw.includes("up to date")
      || raw.includes("no update")
    ) {
      return false;
    }
    if (raw === "available" || raw === "pending" || raw.includes("available")) {
      return true;
    }
    return getDeviceMeta().updateAvailable === true;
  }

  function isFirmwareEffectivelyCurrent() {
    const raw = getFirmwareUpdateState();
    return raw === "installed"
      || raw === "current"
      || raw === "up_to_date"
      || raw === "none"
      || raw.includes("up to date")
      || raw.includes("no update")
      || hasFirmwareBootedIntoNewerVersion();
  }

  function getFirmwareUpdateVersions() {
    const entity = getFirmwareUpdateEntity() || {};
    const current = getFirmwareCurrentVersion(entity) || "—";
    let latest = isFirmwareEntityAlignedWithChannel(entity) ? getFirmwareLatestVersion(entity) : "";
    const relation = latest ? compareFirmwareVersions(latest, current) : null;
    if (!isFirmwareUpdateChecking() && relation !== null && relation <= 0) {
      latest = "";
    }
    return {
      current,
      latest: latest || "—",
    };
  }

  function getFirmwareVersionRelation() {
    const { current, latest } = getFirmwareUpdateVersions();
    if (current === "—" || latest === "—") {
      return null;
    }
    return compareFirmwareVersions(latest, current);
  }

  function getFirmwareReleaseUrlFallback(channel = getFirmwareChannelLabel()) {
    const normalizedChannel = String(channel || "")
      .trim()
      .toLowerCase();
    return FIRMWARE_RELEASE_URLS[normalizedChannel] || FIRMWARE_RELEASE_URLS.main;
  }

  function getFirmwareReleaseUrl() {
    const entityUrl = String((getFirmwareUpdateEntity() || {}).release_url || "").trim();
    const fallbackUrl = getFirmwareReleaseUrlFallback();
    if (!entityUrl) {
      return fallbackUrl;
    }
    if (fallbackUrl.includes("/dev-latest") && !entityUrl.includes("/dev-latest")) {
      return fallbackUrl;
    }
    if (!fallbackUrl.includes("/dev-latest") && entityUrl.includes("/dev-latest")) {
      return fallbackUrl;
    }
    return entityUrl;
  }

  function getFirmwareTitle() {
    return getFirmwareDeviceLabel();
  }

  function getFirmwareChannelLabel() {
    return String(
      getEntityValue("firmwareUpdateChannel")
      || state.entities.releaseChannelText?.state
      || state.entities.releaseChannelText?.value
      || "—"
    ).trim() || "—";
  }

  function hasKnownFirmwareTargetVersion() {
    return getFirmwareUpdateVersions().latest !== "—";
  }

  function wait(ms) {
    return new Promise((resolve) => window.setTimeout(resolve, ms));
  }

  function primeFirmwareUpdateState(channel = getFirmwareChannelLabel()) {
    const entity = getFirmwareUpdateEntity() || {};
    const current = getFirmwareCurrentVersion(entity);
    state.entities.firmwareUpdate = {
      ...entity,
      state: "CHECKING",
      value: "",
      latest_version: "",
      latestVersion: "",
      summary: "",
      release_url: getFirmwareReleaseUrlFallback(channel),
      current_version: current,
    };
  }

  async function pollFirmwareUpdateState() {
    for (let attempt = 0; attempt < 6; attempt += 1) {
      await wait(attempt === 0 ? 900 : 1200);
      await refreshEntities(FIRMWARE_MODAL_KEYS, "all");
      const entityAligned = isFirmwareEntityAlignedWithChannel();
      const knownTarget = hasKnownFirmwareTargetVersion();
      const checking = isFirmwareUpdateChecking();
      const status = getUpdateStatus();
      if (entityAligned && (knownTarget || (!checking && status !== "Nog niet gecontroleerd"))) {
        return;
      }
    }
  }

  async function pollFirmwareInstallState() {
    let waitingForReconnect = false;

    for (let attempt = 0; attempt < 45; attempt += 1) {
      await wait(attempt === 0 ? 700 : 1000);
      try {
        await refreshEntities(FIRMWARE_MODAL_KEYS, "all");
        render();

        if (
          hasInstalledFirmwareTargetVersion()
          || isFirmwareInstallSettled()
          || (isFirmwareEffectivelyCurrent() && !isFirmwareProgressActive() && !isFirmwareUpdateInstalling())
        ) {
          return true;
        }
      } catch (error) {
        if (!waitingForReconnect) {
          state.controlNotice = "Wachten tot het device opnieuw is opgestart...";
          render();
          waitingForReconnect = true;
        }
      }
    }

    return false;
  }

  function getFirmwareModalCopy() {
    const channel = getFirmwareChannelLabel();
    const progress = getFirmwareProgressModel();

    if (progress) {
      return progress.copy;
    }
    if (isFirmwareUpdateJustCompleted()) {
      const version = state.updateInstallCompletedVersion || getFirmwareCurrentVersion() || getFirmwareChannelLabel();
      return `${getFirmwareDeviceLabel()} draait nu op ${version}.`;
    }
    if (isFirmwareUpdateInstalling()) {
      return `OTA-update wordt voorbereid voor ${getFirmwareDeviceLabel()}. Het device kan kort herstarten.`;
    }
    if (isFirmwareUpdateChecking()) {
      return `We controleren of er op kanaal ${channel} een nieuwe firmware beschikbaar is.`;
    }
    if (isFirmwareUpdateAvailable()) {
      return "Er staat een nieuwere firmware klaar.";
    }
    if (isFirmwareEffectivelyCurrent()) {
      return `Je draait al de nieuwste firmware op kanaal ${channel}.`;
    }
    return "Kies een kanaal en controleer of er een nieuwere firmware klaarstaat.";
  }

  function getHeaderRenderSignature() {
    return [
      state.interfacePanelOpen ? "open" : "closed",
      state.nativeOpen ? "native" : "app",
      state.appView,
      state.complete ? "complete" : "incomplete",
      state.overviewTheme,
      state.hpVisualMode,
      getInstallationLabel(),
      ...HEADER_ENTITY_KEYS.map((key) => getEntitySignatureFragment(key)),
      getEntitySignatureFragment("firmwareUpdate"),
      getEntitySignatureFragment("firmwareUpdateChannel"),
      getEntitySignatureFragment("firmwareUpdateProgress"),
      getEntitySignatureFragment("firmwareUpdateStatus"),
    ].join("|");
  }

  function getConnectivityStatus() {
    if (state.entities.status && !isEntityActive("status")) {
      return "Offline";
    }
    const ip = getDeviceIpAddress();
    if (ip && ip !== "—") {
      return "Verbonden";
    }
    return "Bezig";
  }

  function getDeviceVersionLabel() {
    const version = String(getEntityValue("projectVersionText") || "").trim();
    return version || "—";
  }

  function getEspTemperatureLabel() {
    const entity = state.entities.espInternalTemp;
    if (!entity) {
      return "—";
    }
    const numeric = getEntityNumericValue("espInternalTemp");
    if (!Number.isNaN(numeric)) {
      return formatNumericState(numeric, 1, entity.uom || " °C");
    }
    return getEntityStateText("espInternalTemp");
  }

  function getConnectivityModalRows() {
    const rows = [
      ["Netwerkstatus", getConnectivityStatus()],
      ["IP-adres", getDeviceIpAddress()],
    ];
    const ssid = String(getEntityValue("wifiSsid") || "").trim();
    if (ssid) {
      rows.push(["WiFi SSID", ssid]);
    }
    const signalEntity = state.entities.wifiSignal;
    if (signalEntity) {
      const signal = getEntityNumericValue("wifiSignal");
      if (!Number.isNaN(signal)) {
        rows.push(["WiFi signaal", formatNumericState(signal, 0, signalEntity.uom || " dBm")]);
      }
    }
    return rows;
  }

  function getHeaderStatusAction(key) {
    if (key === "update") {
      return "open-update-modal";
    }
    if (key === "connectivity") {
      return "open-connectivity-modal";
    }
    return "";
  }

  function getHeaderStatusItems() {
    return [
      ["installation", "Installatie", getInstallationLabel()],
      ["setup", "Setup", state.complete ? "Afgerond" : "Open"],
      ["uptime", "Uptime", formatUptimeFromMeta()],
      ["connectivity", "Connectiviteit", getConnectivityStatus()],
      ["espTemp", "ESP-temp", getEspTemperatureLabel()],
      ["time", "Tijd", formatDeviceClock()],
      ["ip", "IP-adres", getDeviceIpAddress()],
      ["version", "Versie", getDeviceVersionLabel()],
      ["update", "Update", getUpdateStatus(), Boolean(getFirmwareUpdateEntity())],
    ];
  }

  function hasFirmwareUpdateAttention() {
    return isFirmwareUpdateAvailable();
  }

  function renderHeaderStatusGrid() {
    const statusItems = getHeaderStatusItems();

    return `
      <div class="oq-helper-status-grid">
        ${statusItems.map(([key, label, value, interactive]) => {
          const action = getHeaderStatusAction(key);
          const isInteractive = Boolean(interactive || action);
          return `
          <${isInteractive ? "button" : "div"}
            class="oq-helper-status-item${isInteractive ? " oq-helper-status-item--button" : ""}${key === "update" && hasFirmwareUpdateAttention() ? " oq-helper-status-item--attention" : ""}"
            data-oq-header-status="${escapeHtml(key)}"
            ${isInteractive ? `type="button" data-oq-action="${escapeHtml(action)}"` : ""}
          >
            <span class="oq-helper-status-label">${escapeHtml(label)}</span>
            <strong class="oq-helper-status-value">${escapeHtml(value)}</strong>
          </${isInteractive ? "button" : "div"}>
        `;
        }).join("")}
      </div>
    `;
  }

  function patchHeaderDom() {
    if (!state.root) {
      return false;
    }

    const statusGrid = state.root.querySelector(".oq-helper-status-grid");
    if (!statusGrid) {
      return Boolean(state.root.querySelector(".oq-helper-hub"));
    }

    const statusItems = getHeaderStatusItems();
    const renderedItems = statusGrid.querySelectorAll("[data-oq-header-status]");
    if (renderedItems.length !== statusItems.length) {
      statusGrid.outerHTML = renderHeaderStatusGrid();
      return true;
    }

    for (const [key, label, value, interactive] of statusItems) {
      const item = statusGrid.querySelector(`[data-oq-header-status="${key}"]`);
      if (!item) {
        statusGrid.outerHTML = renderHeaderStatusGrid();
        return true;
      }
      const action = getHeaderStatusAction(key);
      const isInteractive = Boolean(interactive || action);
      if (item.tagName.toLowerCase() !== (isInteractive ? "button" : "div")) {
        statusGrid.outerHTML = renderHeaderStatusGrid();
        return true;
      }

      const labelNode = item.querySelector(".oq-helper-status-label");
      const valueNode = item.querySelector(".oq-helper-status-value");
      if (!labelNode || !valueNode) {
        statusGrid.outerHTML = renderHeaderStatusGrid();
        return true;
      }

      if (labelNode.textContent !== label) {
        labelNode.textContent = label;
      }
      if (valueNode.textContent !== value) {
        valueNode.textContent = value;
      }
      if (isInteractive) {
        item.setAttribute("data-oq-action", action);
      } else {
        item.removeAttribute("data-oq-action");
      }
      item.classList.toggle("oq-helper-status-item--button", isInteractive);
      item.classList.toggle("oq-helper-status-item--attention", key === "update" && hasFirmwareUpdateAttention());
    }

    return true;
  }

  function renderHeaderDevControls() {
    const controls = typeof window !== "undefined" ? window.__OQ_DEV_CONTROLS__ : null;
    if (!controls || typeof controls.render !== "function") {
      return "";
    }
    return controls.render();
  }

  function renderDevPanel() {
    const controlsMarkup = renderHeaderDevControls();
    if (!controlsMarkup) {
      return "";
    }

    if (!state.devPanelOpen) {
      return `
        <aside class="oq-helper-devdock oq-helper-devdock--collapsed" aria-label="Preview en test">
          <button
            class="oq-helper-devdock-toggle"
            type="button"
            data-oq-action="toggle-dev-panel"
            aria-expanded="false"
            aria-label="Open previewpaneel"
          >Preview</button>
        </aside>
      `;
    }

    return `
      <aside class="oq-helper-devdock" aria-label="Preview en test">
        <div class="oq-helper-devdock-head">
          <div>
            <p class="oq-helper-devdock-kicker">Preview en test</p>
            <h2 class="oq-helper-devdock-title">Mockbediening</h2>
          </div>
          <button
            class="oq-helper-devdock-toggle oq-helper-devdock-toggle--close"
            type="button"
            data-oq-action="toggle-dev-panel"
            aria-expanded="true"
            aria-label="Sluit previewpaneel"
          >×</button>
        </div>
        ${controlsMarkup}
      </aside>
    `;
  }

  function renderHeaderStatus() {
    const surface = state.nativeOpen ? "native" : "app";
    const hasUpdateAttention = hasFirmwareUpdateAttention();
    if (!state.interfacePanelOpen) {
      return `
        <aside class="oq-helper-hub oq-helper-hub--collapsed" aria-label="Weergave en systeem">
          <div class="oq-helper-hub-head-actions">
            <button
              class="oq-helper-hub-toggle${hasUpdateAttention ? " oq-helper-hub-toggle--attention" : ""}"
              type="button"
              data-oq-action="toggle-interface-panel"
              aria-expanded="false"
              aria-label="Open interfacepaneel"
              title="Open interfacepaneel"
            >⚙${hasUpdateAttention ? '<span class="oq-helper-hub-toggle-dot" aria-hidden="true"></span>' : ""}</button>
          </div>
        </aside>
      `;
    }

    return `
      <aside class="oq-helper-hub" aria-label="Weergave en systeem">
        <div class="oq-helper-hub-head">
          <h2 class="oq-helper-hub-title">Weergave en systeem</h2>
          <div class="oq-helper-hub-head-actions">
            <button
              class="oq-helper-hub-toggle oq-helper-hub-toggle--close"
              type="button"
              data-oq-action="toggle-interface-panel"
              aria-expanded="true"
              aria-label="Sluit interfacepaneel"
              title="Sluit interfacepaneel"
            >×</button>
          </div>
        </div>
        <div class="oq-helper-hub-block">
          <p class="oq-helper-hub-kicker">Weergave</p>
          <div class="oq-helper-hub-switches">
            <button class="oq-helper-hub-chip${surface === "app" ? " is-active" : ""}" type="button" data-oq-action="select-surface" data-surface="app">OpenQuatt-app</button>
            <button class="oq-helper-hub-chip${surface === "native" ? " is-active" : ""}" type="button" data-oq-action="select-surface" data-surface="native">ESPHome fallback</button>
          </div>
        </div>
        <div class="oq-helper-hub-block">
          <p class="oq-helper-hub-kicker">Uiterlijk en overzicht</p>
          <div class="oq-helper-hub-actions">
            <button class="oq-helper-button oq-helper-button--ghost oq-helper-hub-action" type="button" data-oq-action="toggle-overview-theme">
              ${state.overviewTheme === "light" ? "Donkere modus" : "Lichte modus"}
            </button>
          </div>
        </div>
        <div class="oq-helper-hub-block">
          <p class="oq-helper-hub-kicker">Systeem</p>
          ${renderHeaderStatusGrid()}
          <div class="oq-helper-hub-actions oq-helper-hub-actions--single">
            <button class="oq-helper-hub-action oq-helper-hub-action--warning" type="button" data-oq-action="open-restart-confirm">
              Herstart OpenQuatt
            </button>
          </div>
        </div>
      </aside>
    `;
  }

  function renderNativeSurfaceShell() {
    const surface = state.nativeOpen ? "native" : "app";
    const statusCopy = state.nativeFrontendLoading
      ? "ESPHome fallback wordt geladen. Daarna blijft alleen de native webinterface actief."
      : "De OpenQuatt-app is tijdelijk uitgeschakeld, zodat de ESPHome fallback zelfstandig en zonder extra interfacebelasting kan draaien.";
    const errorMarkup = state.controlError
      ? `<p class="oq-native-surface-note oq-native-surface-note--error">${escapeHtml(state.controlError)}</p>`
      : "";

    return `
      <div class="oq-helper-shell${state.overviewTheme === "dark" ? " oq-helper-shell--dark" : ""} oq-native-surface-shell">
        <div class="oq-helper-card oq-native-surface-card">
          <div class="oq-native-surface-head">
            <div class="oq-native-surface-copy">
              <p class="oq-helper-kicker">Weergave</p>
              <h1>ESPHome fallback actief</h1>
              <p>${escapeHtml(statusCopy)}</p>
            </div>
            <div class="oq-native-surface-controls">
              <div class="oq-helper-hub-switches">
                <button class="oq-helper-hub-chip${surface === "app" ? " is-active" : ""}" type="button" data-oq-action="select-surface" data-surface="app">OpenQuatt-app</button>
                <button class="oq-helper-hub-chip${surface === "native" ? " is-active" : ""}" type="button" data-oq-action="select-surface" data-surface="native">ESPHome fallback</button>
              </div>
            </div>
          </div>
          <p class="oq-native-surface-note">Schakel terug naar OpenQuatt-app om tuning, live overzicht en instellingen weer te activeren.</p>
          ${errorMarkup}
        </div>
      </div>
    `;
  }

  function renderUpdateModal() {
    if (!state.updateModalOpen) {
      return "";
    }

    const entity = getFirmwareUpdateEntity();
    const channelEntity = state.entities.firmwareUpdateChannel || null;
    const { current, latest } = getFirmwareUpdateVersions();
    const checking = isFirmwareUpdateChecking();
    const installing = isFirmwareUpdateInstalling();
    const available = isFirmwareUpdateAvailable();
    const summary = getFirmwareModalCopy();
    const progress = getFirmwareProgressModel();
    const justCompleted = isFirmwareUpdateJustCompleted();
    const releaseUrl = getFirmwareReleaseUrl();
    const title = justCompleted
      ? "Firmware-update afgerond"
      : progress
      ? "Firmware-update bezig"
      : installing
      ? "Firmware-update bezig"
      : checking
        ? "Controleren op firmware-update"
        : getFirmwareTitle();
    const channelOptions = channelEntity
      ? (Array.isArray(channelEntity.option) ? channelEntity.option : Array.isArray(channelEntity.options) ? channelEntity.options : [])
      : [];

    return `
      <div class="oq-helper-modal-backdrop${checking || installing || progress ? " is-busy" : ""}${state.overviewTheme === "dark" ? " oq-helper-modal-backdrop--dark" : ""}" data-oq-modal="firmware-update">
        <section class="oq-helper-modal" role="dialog" aria-modal="true" aria-labelledby="oq-update-modal-title">
          <div class="oq-helper-modal-head">
            <div>
              <p class="oq-helper-modal-kicker">OTA-update</p>
              <h2 class="oq-helper-modal-title" id="oq-update-modal-title">${escapeHtml(title)}</h2>
            </div>
            <button class="oq-helper-modal-close" type="button" data-oq-action="close-update-modal" aria-label="Sluit update-popup">×</button>
          </div>
          <p class="oq-helper-modal-copy">${escapeHtml(summary)}</p>
          ${justCompleted ? `
            <div class="oq-helper-modal-success" aria-live="polite">
              <strong>Bijgewerkt</strong>
              <span>De nieuwe firmware draait nu op het device.</span>
            </div>
          ` : ""}
          ${progress ? `
            <div class="oq-helper-modal-progress" aria-live="polite">
              <div class="oq-helper-modal-progress-head">
                <strong>${escapeHtml(progress.phaseLabel)}</strong>
                <span>${escapeHtml(`${progress.percent}%`)}</span>
              </div>
              <div class="oq-helper-modal-progress-track" aria-hidden="true">
                <span class="oq-helper-modal-progress-fill" style="width:${Math.max(0, Math.min(100, progress.percent))}%"></span>
              </div>
            </div>
          ` : ""}
          <div class="oq-helper-modal-grid">
            <div class="oq-helper-modal-row">
              <span class="oq-helper-modal-label">Status</span>
              <strong class="oq-helper-modal-value">${escapeHtml(getUpdateStatus())}</strong>
            </div>
            <div class="oq-helper-modal-row">
              <span class="oq-helper-modal-label">Huidige versie</span>
              <strong class="oq-helper-modal-value">${escapeHtml(current)}</strong>
            </div>
            <div class="oq-helper-modal-row">
              <span class="oq-helper-modal-label">Beschikbare versie</span>
              <strong class="oq-helper-modal-value">${escapeHtml(latest)}</strong>
            </div>
            <div class="oq-helper-modal-row">
              <span class="oq-helper-modal-label">Kanaal</span>
              <strong class="oq-helper-modal-value">${escapeHtml(getFirmwareChannelLabel())}</strong>
            </div>
          </div>
          ${channelOptions.length ? `
            <label class="oq-helper-modal-channel">
              <span class="oq-helper-modal-label">Releasekanaal</span>
              <select data-oq-field="firmwareUpdateChannel">
                ${channelOptions.map((option) => `
                  <option value="${escapeHtml(option)}" ${String(getEntityValue("firmwareUpdateChannel") || "") === option ? "selected" : ""}>${escapeHtml(option)}</option>
                `).join("")}
              </select>
            </label>
          ` : ""}
          <p class="oq-helper-modal-note">Laat deze pagina open tijdens de OTA-update. Het device kan na installatie kort herstarten en daarna vanzelf weer terugkomen.</p>
          <div class="oq-helper-modal-actions">
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="run-firmware-check" ${checking || installing || progress ? "disabled" : ""}>
              ${checking ? "Controleren..." : "Controleer opnieuw"}
            </button>
            ${justCompleted
              ? '<button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="close-update-modal">Gereed</button>'
              : `<button class="oq-helper-button" type="button" data-oq-action="install-firmware-update" ${!available || installing || checking || progress || !entity ? "disabled" : ""}>
              ${installing ? "Bijwerken..." : "Nu bijwerken"}
            </button>`}
            ${releaseUrl ? `<a class="oq-helper-button oq-helper-button--ghost oq-helper-modal-link" href="${escapeHtml(releaseUrl)}" target="_blank" rel="noreferrer">Release notes</a>` : ""}
          </div>
        </section>
      </div>
    `;
  }

  function renderSystemModal() {
    if (state.systemModal === "connectivity") {
      const rows = getConnectivityModalRows();
      return `
        <div class="oq-helper-modal-backdrop${state.overviewTheme === "dark" ? " oq-helper-modal-backdrop--dark" : ""}" data-oq-modal="system">
          <section class="oq-helper-modal" role="dialog" aria-modal="true" aria-labelledby="oq-system-modal-title">
            <div class="oq-helper-modal-head">
              <div>
                <p class="oq-helper-modal-kicker">Systeem</p>
                <h2 class="oq-helper-modal-title" id="oq-system-modal-title">Connectiviteit</h2>
              </div>
              <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit systeem-popup">×</button>
            </div>
            <p class="oq-helper-modal-copy">Status en details van de actieve netwerkverbinding van OpenQuatt.</p>
            <div class="oq-helper-modal-grid">
              ${rows.map(([label, value]) => `
                <div class="oq-helper-modal-row">
                  <span class="oq-helper-modal-label">${escapeHtml(label)}</span>
                  <strong class="oq-helper-modal-value">${escapeHtml(value)}</strong>
                </div>
              `).join("")}
            </div>
            <div class="oq-helper-modal-actions">
              <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="close-system-modal">Gereed</button>
            </div>
          </section>
        </div>
      `;
    }

    if (state.systemModal === "restart-confirm") {
      const busy = state.busyAction === "restartAction";
      return `
        <div class="oq-helper-modal-backdrop${state.overviewTheme === "dark" ? " oq-helper-modal-backdrop--dark" : ""}" data-oq-modal="system">
          <section class="oq-helper-modal" role="dialog" aria-modal="true" aria-labelledby="oq-restart-modal-title">
            <div class="oq-helper-modal-head">
              <div>
                <p class="oq-helper-modal-kicker">Systeem</p>
                <h2 class="oq-helper-modal-title" id="oq-restart-modal-title">OpenQuatt herstarten?</h2>
              </div>
              <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit herstart-popup">×</button>
            </div>
            <p class="oq-helper-modal-copy">De webinterface en regeling zijn tijdens de herstart kort niet bereikbaar. Daarna komt OpenQuatt vanzelf terug.</p>
            <div class="oq-helper-modal-actions">
              <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="close-system-modal" ${busy ? "disabled" : ""}>Annuleren</button>
              <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="confirm-restart" ${busy ? "disabled" : ""}>${busy ? "Herstarten..." : "Herstarten"}</button>
            </div>
          </section>
        </div>
      `;
    }

    if (state.systemModal === "silent-settings") {
      return `
        <div class="oq-helper-modal-backdrop${state.overviewTheme === "dark" ? " oq-helper-modal-backdrop--dark" : ""}" data-oq-modal="system">
          <section class="oq-helper-modal oq-helper-modal--wide" role="dialog" aria-modal="true" aria-labelledby="oq-silent-settings-modal-title">
            <div class="oq-helper-modal-head">
              <div>
                <p class="oq-helper-modal-kicker">Stille uren</p>
                <h2 class="oq-helper-modal-title" id="oq-silent-settings-modal-title">Stille uren instellen</h2>
              </div>
              <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit stille-uren-popup">×</button>
            </div>
            <p class="oq-helper-modal-copy">Kies wanneer het systeem stiller moet werken, en hoe ver het dan nog mag opschalen. Wijzigingen worden direct toegepast.</p>
            <div class="oq-helper-modal-body">
              ${renderSilentSettingsFields()}
            </div>
            <div class="oq-helper-modal-actions">
              <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="close-system-modal">Gereed</button>
            </div>
          </section>
        </div>
      `;
    }

    if (state.systemModal === "openquatt-pause") {
      const enabled = isEntityActive("openquattEnabled");
      const busy = state.busyAction === "openquatt-regulation";
      const hasResumeEntity = hasEntity("openquattResumeAt");
      const resumeScheduled = hasOpenQuattResumeSchedule();
      const resumeLabel = formatOpenQuattResumeDateTime(getEntityValue("openquattResumeAt"));
      const draftValue = getOpenQuattPauseDraftValue();
      return `
        <div class="oq-helper-modal-backdrop${state.overviewTheme === "dark" ? " oq-helper-modal-backdrop--dark" : ""}" data-oq-modal="system">
          <section class="oq-helper-modal oq-helper-modal--wide" role="dialog" aria-modal="true" aria-labelledby="oq-openquatt-pause-modal-title">
            <div class="oq-helper-modal-head">
              <div>
                <p class="oq-helper-modal-kicker">Bediening</p>
                <h2 class="oq-helper-modal-title" id="oq-openquatt-pause-modal-title">Openquatt regeling</h2>
              </div>
              <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit regeling-popup">×</button>
            </div>
            <p class="oq-helper-modal-copy">${enabled
              ? "Kies hoe lang de regeling uit moet blijven. Verwarmen en koelen stoppen dan, maar beveiligingen blijven actief."
              : "De regeling staat nu tijdelijk uit. Je kunt meteen weer inschakelen of een nieuw hervatmoment plannen."
            }</p>
            ${resumeScheduled
              ? `<div class="oq-helper-modal-success oq-helper-modal-success--compact">
                  <strong>Hervat nu automatisch</strong>
                  <span>${escapeHtml(resumeLabel)}</span>
                </div>`
              : ""
            }
            ${hasResumeEntity
              ? `
                <div class="oq-helper-modal-presets">
                  <button class="oq-helper-button" type="button" data-oq-action="apply-openquatt-preset" data-pause-preset="2h" ${busy ? "disabled" : ""}>2 uur</button>
                  <button class="oq-helper-button" type="button" data-oq-action="apply-openquatt-preset" data-pause-preset="8h" ${busy ? "disabled" : ""}>8 uur</button>
                  <button class="oq-helper-button" type="button" data-oq-action="apply-openquatt-preset" data-pause-preset="tomorrow-morning" ${busy ? "disabled" : ""}>Tot morgenochtend</button>
                </div>
                <div class="oq-helper-modal-channel oq-helper-modal-channel--datetime">
                  <span class="oq-helper-modal-label">Hervatten op</span>
                  <div class="oq-helper-modal-inline">
                    <label class="oq-settings-control oq-settings-control--datetime">
                      <input
                        class="oq-helper-input"
                        type="datetime-local"
                        step="60"
                        lang="nl-NL"
                        data-oq-field="openquattPauseDraft"
                        data-oq-pause-draft="resume"
                        value="${escapeHtml(draftValue)}"
                        ${busy ? "disabled" : ""}
                      >
                      <span class="oq-settings-time-icon" aria-hidden="true">
                        <svg viewBox="0 0 20 20" focusable="false">
                          <rect x="3.2" y="4.2" width="13.6" height="12.6" rx="2.4" fill="none" stroke="currentColor" stroke-width="1.5" />
                          <path d="M6.2 2.9V5.4M13.8 2.9V5.4M3.8 8.1H16.2M10 10.3V13.1L12.3 14.4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </span>
                    </label>
                    <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="apply-openquatt-custom-pause" ${busy ? "disabled" : ""}>Plan moment</button>
                  </div>
                </div>
              `
              : `<p class="oq-helper-modal-note">Automatisch hervatten is nog niet beschikbaar op deze firmware. Je kunt de regeling wel zonder eindtijd uitschakelen.</p>`
            }
            <div class="oq-helper-modal-actions">
              <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="close-system-modal" ${busy ? "disabled" : ""}>Annuleren</button>
              ${!enabled
                ? `<button class="oq-helper-button" type="button" data-oq-action="enable-openquatt-now" ${busy ? "disabled" : ""}>Nu inschakelen</button>`
                : ""
              }
              <button class="oq-helper-button" type="button" data-oq-action="apply-openquatt-indefinite" ${busy ? "disabled" : ""}>${enabled ? "Zonder eindtijd uitschakelen" : "Zonder eindtijd"}</button>
            </div>
          </section>
        </div>
      `;
    }

    return "";
  }

  function getEntityValue(key) {
    if (Object.prototype.hasOwnProperty.call(state.drafts, key)) {
      return state.drafts[key];
    }
    const entity = state.entities[key];
    if (!entity) {
      return "";
    }
    return entity.value ?? entity.state ?? "";
  }

  function getNumberMeta(key) {
    const entity = state.entities[key] || {};
    return {
      min: Number(entity.min_value ?? 0),
      max: Number(entity.max_value ?? 100),
      step: Number(entity.step ?? 1),
      uom: entity.uom || "",
    };
  }

  function getInputDraftValue(key) {
    if (Object.prototype.hasOwnProperty.call(state.inputDrafts, key)) {
      return state.inputDrafts[key];
    }
    return getEntityValue(key);
  }

  function parseLooseNumber(rawValue) {
    if (typeof rawValue === "number") {
      return rawValue;
    }

    const value = String(rawValue ?? "")
      .trim()
      .replace(",", ".");

    if (!value || value === "-" || value === "." || value === "-.") {
      return Number.NaN;
    }

    return Number(value);
  }

  function normalizeTimeValue(rawValue) {
    const value = String(rawValue || "").trim();
    if (!value) {
      return "";
    }

    const compactMatch = value.match(/^(\d{1,2}):?(\d{2})(?::?(\d{2}))?$/);
    if (!compactMatch) {
      return "";
    }

    const hours = Number(compactMatch[1]);
    const minutes = Number(compactMatch[2]);
    const seconds = Number(compactMatch[3] || "0");
    if ([hours, minutes, seconds].some((part) => Number.isNaN(part))) {
      return "";
    }
    if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59 || seconds < 0 || seconds > 59) {
      return "";
    }

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }

  function toTimeInputValue(rawValue) {
    const normalized = normalizeTimeValue(rawValue);
    return normalized ? normalized.slice(0, 5) : "";
  }

  function normalizeDateTimeValue(rawValue) {
    const value = String(rawValue || "").trim();
    if (!value) {
      return "";
    }

    const match = value.match(/^(\d{4})-(\d{2})-(\d{2})(?:[T\s](\d{2}):(\d{2})(?::(\d{2}))?)$/);
    if (!match) {
      return "";
    }

    const year = Number(match[1]);
    const month = Number(match[2]);
    const day = Number(match[3]);
    const hour = Number(match[4]);
    const minute = Number(match[5]);
    const second = Number(match[6] || "0");
    if ([year, month, day, hour, minute, second].some((part) => Number.isNaN(part))) {
      return "";
    }
    if (
      year < 2000
      || month < 1
      || month > 12
      || day < 1
      || day > 31
      || hour < 0
      || hour > 23
      || minute < 0
      || minute > 59
      || second < 0
      || second > 59
    ) {
      return "";
    }

    return `${String(year).padStart(4, "0")}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")} ${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}:${String(second).padStart(2, "0")}`;
  }

  function toDateTimeInputValue(rawValue) {
    const normalized = normalizeDateTimeValue(rawValue);
    return normalized ? normalized.slice(0, 16).replace(" ", "T") : "";
  }

  function parseDateTimeValue(rawValue) {
    const normalized = normalizeDateTimeValue(rawValue);
    if (!normalized || normalized === OPENQUATT_RESUME_CLEAR_VALUE) {
      return null;
    }

    const match = normalized.match(/^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})$/);
    if (!match) {
      return null;
    }

    const year = Number(match[1]);
    const month = Number(match[2]);
    const day = Number(match[3]);
    const hour = Number(match[4]);
    const minute = Number(match[5]);
    const second = Number(match[6]);
    const date = new Date(year, month - 1, day, hour, minute, second, 0);
    return Number.isNaN(date.getTime()) ? null : date;
  }

  function hasOpenQuattResumeSchedule(rawValue = getEntityValue("openquattResumeAt")) {
    return Boolean(parseDateTimeValue(rawValue));
  }

  function formatOpenQuattResumeDateTime(rawValue, short = false) {
    const date = parseDateTimeValue(rawValue);
    if (!date) {
      return "";
    }
    return new Intl.DateTimeFormat("nl-NL", short
      ? { weekday: "short", day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" }
      : { weekday: "long", day: "numeric", month: "long", hour: "2-digit", minute: "2-digit" }
    ).format(date);
  }

  function formatDateTimeForInput(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hour = String(date.getHours()).padStart(2, "0");
    const minute = String(date.getMinutes()).padStart(2, "0");
    return `${year}-${month}-${day}T${hour}:${minute}`;
  }

  function roundDateToNextQuarter(date) {
    const rounded = new Date(date.getTime());
    rounded.setSeconds(0, 0);
    const minutes = rounded.getMinutes();
    const remainder = minutes % 15;
    if (remainder !== 0) {
      rounded.setMinutes(minutes + (15 - remainder));
    }
    return rounded;
  }

  function getOpenQuattPausePresetValue(preset) {
    const now = new Date();
    if (preset === "2h" || preset === "8h") {
      const hours = preset === "2h" ? 2 : 8;
      const target = roundDateToNextQuarter(new Date(now.getTime() + (hours * 3600 * 1000)));
      return formatDateTimeForInput(target);
    }
    if (preset === "tomorrow-morning") {
      const target = new Date(now);
      target.setDate(target.getDate() + 1);
      target.setHours(7, 0, 0, 0);
      return formatDateTimeForInput(target);
    }
    return "";
  }

  function getOpenQuattPauseDraftValue() {
    if (state.pauseResumeDraft) {
      return state.pauseResumeDraft;
    }
    const scheduledValue = toDateTimeInputValue(getEntityValue("openquattResumeAt"));
    return scheduledValue || getOpenQuattPausePresetValue("8h");
  }

  function getSettingsRefreshKeys() {
    return [...new Set(["setupComplete", ...SETTINGS_KEYS])];
  }

  function formatValue(key, value = getEntityValue(key)) {
    if (value === "" || value === null || Number.isNaN(Number(value))) {
      return "—";
    }
    const meta = getNumberMeta(key);
    const decimals = meta.step < 1 ? 1 : 0;
    return `${Number(value).toFixed(decimals)}${meta.uom ? ` ${meta.uom}` : ""}`;
  }

  function normalizeNumber(key, rawValue) {
    const meta = getNumberMeta(key);
    const numeric = parseLooseNumber(rawValue);
    if (Number.isNaN(numeric)) {
      const current = parseLooseNumber(state.entities[key]?.value ?? state.entities[key]?.state ?? "");
      return Number.isNaN(current) ? meta.min : current;
    }
    const clamped = Math.min(meta.max, Math.max(meta.min, numeric));
    const steps = Math.round((clamped - meta.min) / meta.step);
    const snapped = meta.min + steps * meta.step;
    return Number(snapped.toFixed(meta.step < 1 ? 1 : 0));
  }

  function getCurveFallbackSuggestion() {
    const middleLeft = CURVE_POINTS[Math.floor((CURVE_POINTS.length / 2) - 1)];
    const middleRight = CURVE_POINTS[Math.floor(CURVE_POINTS.length / 2)];
    if (!middleLeft || !middleRight || !hasEntity("curveFallbackSupply")) {
      return null;
    }

    const leftValue = normalizeNumber(middleLeft.key, getEntityValue(middleLeft.key));
    const rightValue = normalizeNumber(middleRight.key, getEntityValue(middleRight.key));
    const midpointValue = (leftValue + rightValue) / 2;
    const suggested = normalizeNumber("curveFallbackSupply", midpointValue);

    return {
      value: suggested,
      label: formatValue("curveFallbackSupply", suggested),
      basis: `Afgeleid uit het midden van je stooklijn (${middleLeft.label} en ${middleRight.label}).`,
      isCurrent: normalizeNumber("curveFallbackSupply", getEntityValue("curveFallbackSupply")) === suggested,
    };
  }

  async function fetchEntityPayload(key, detail = "state") {
    const entity = ENTITY_DEFS[key];
    const url = `${buildEntityPath(entity.domain, entity.name)}${detail === "all" ? "?detail=all" : ""}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`${entity.name} HTTP ${response.status}`);
    }
    return response.json();
  }

  async function refreshEntities(keys, detail = "state") {
    const results = [];
    for (let index = 0; index < keys.length; index += ENTITY_REFRESH_CONCURRENCY) {
      const batch = keys.slice(index, index + ENTITY_REFRESH_CONCURRENCY);
      const batchResults = await Promise.allSettled(
        batch.map(async (key) => ({ key, payload: await fetchEntityPayload(key, detail) }))
      );
      results.push(...batchResults);
    }

    let firstError = "";
    results.forEach((result, index) => {
      const key = keys[index];
      if (result.status === "fulfilled") {
        const { payload } = result.value;
        state.entities[key] = {
          ...(state.entities[key] || {}),
          ...payload,
        };
      } else if (ENTITY_DEFS[key]?.optional) {
        delete state.entities[key];
      } else if (!ENTITY_DEFS[key]?.optional && !firstError) {
        firstError = result.reason.message || String(result.reason);
      }
    });

    applyDerivedState();
    if (firstError) {
      state.controlError = `Niet alle helpervelden konden worden ververst. ${firstError}`;
    } else if (!state.busyAction) {
      state.controlError = "";
    }
  }

  function applyDerivedState() {
    state.complete = hasEntity("setupComplete")
      ? isEntityActive("setupComplete")
      : false;
    state.stage = state.complete ? "Gereed" : "Quick Start";
    state.summary = renderAppSummary();
    if (!state.appView) {
      setAppView(getUrlAppView() || getDefaultAppView(), { syncMode: "replace", forceSync: true });
    }
  }

  async function primeEntities() {
    if (state.nativeOpen) {
      return;
    }
    state.loadingEntities = true;
    render();
    const keys = Object.keys(ENTITY_DEFS).filter((key) => !["apply", "reset"].includes(key));
    try {
      await refreshEntities(keys, "all");
    } finally {
      state.loadingEntities = false;
      render();
    }
  }

  async function syncEntities() {
    if (state.nativeOpen || state.loadingEntities || state.focusedField || state.draggingCurveKey || state.busyAction || state.settingsInteractionLock) {
      return;
    }

    const keys = state.appView === "overview"
      ? [...OVERVIEW_KEYS, ...HEADER_ENTITY_KEYS, "setupComplete", ...FIRMWARE_ENTITY_KEYS]
      : state.appView === "settings"
        ? ["setupComplete", ...FIRMWARE_ENTITY_KEYS, ...HEADER_ENTITY_KEYS, ...SETTINGS_KEYS]
        : [
            "setupComplete",
            ...FIRMWARE_ENTITY_KEYS,
            ...HEADER_ENTITY_KEYS,
            "strategy",
            ...LIMIT_KEYS,
            ...FLOW_SETTING_KEYS,
            ...(isCurveMode() ? CURVE_POINTS.map((point) => point.key) : POWER_HOUSE_KEYS),
          ];

    try {
      await refreshEntities(keys, "state");
      const nextHeaderSignature = getHeaderRenderSignature();
      if (nextHeaderSignature !== state.headerRenderSignature) {
        render();
        return;
      }
      patchHeaderDom();
      if (state.appView === "settings") {
        const nextSettingsSignature = getSettingsRenderSignature();
        if (nextSettingsSignature !== state.settingsRenderSignature) {
          render();
        }
        return;
      }
      if (state.appView === QUICK_START_VIEW) {
        const nextQuickStartSignature = getQuickStartRenderSignature();
        if (nextQuickStartSignature !== state.quickStartRenderSignature) {
          render();
        }
        return;
      }
      if (!patchOverviewDom()) {
        render();
      }
    } catch (error) {
      state.controlError = `Helperstatus kon niet worden geladen. ${error.message}`;
      render();
    }
  }

  function handleFocusChange() {
    window.setTimeout(() => {
      const active = document.activeElement;
      state.focusedField = active && active.dataset ? active.dataset.oqField || "" : "";
      state.settingsInteractionLock = Boolean(active && active.closest && active.closest(".oq-ph-concept-hotspot"));
    }, 0);
  }

  function handleSettingsInteractionStart(event) {
    if (event.target.closest(".oq-ph-concept-hotspot")) {
      state.settingsInteractionLock = true;
    }
  }

  function handleSettingsInteractionEnd(event) {
    const hotspot = event.target.closest(".oq-ph-concept-hotspot");
    if (!hotspot) {
      return;
    }

    if (event.relatedTarget && hotspot.contains(event.relatedTarget)) {
      return;
    }

    const hoveredHotspot = state.root && state.root.querySelector(".oq-ph-concept-hotspot:hover");
    const focusedHotspot = document.activeElement && document.activeElement.closest
      ? document.activeElement.closest(".oq-ph-concept-hotspot")
      : null;

    state.settingsInteractionLock = Boolean(hoveredHotspot || focusedHotspot);
  }

  function getEntitySignatureFragment(key) {
    const entity = state.entities[key];
    if (!entity) {
      return `${key}:__missing__`;
    }

    const value = entity.state ?? entity.value ?? "";
    const options = Array.isArray(entity.options) ? entity.options.join(",") : "";
    return `${key}:${value}::${options}`;
  }

  function getSettingsRenderSignature() {
    return [
      state.appView,
      state.loadingEntities ? "loading" : "ready",
      state.controlNotice,
      state.controlError,
      state.settingsInfoOpen,
      ...SETTINGS_KEYS.map(getEntitySignatureFragment),
    ].join("|");
  }

  function getRenderSignature(value) {
    try {
      return JSON.stringify(value);
    } catch (error) {
      return String(value ?? "");
    }
  }

  function getOverviewControlsRenderSignature() {
    return [
      state.appView,
      state.busyAction,
      getEntitySignatureFragment("openquattEnabled"),
      getEntitySignatureFragment("openquattResumeAt"),
      getEntitySignatureFragment("manualCoolingEnable"),
      getEntitySignatureFragment("silentModeOverride"),
      getEntitySignatureFragment("controlModeLabel"),
      getEntitySignatureFragment("coolingPermitted"),
      getEntitySignatureFragment("coolingRequestActive"),
      getEntitySignatureFragment("coolingBlockReason"),
      getEntitySignatureFragment("silentActive"),
    ].join("|");
  }

  function getQuickStartRenderSignature() {
    return [
      state.appView,
      state.loadingEntities ? "loading" : "ready",
      state.currentStep,
      state.complete ? "complete" : "incomplete",
      state.controlNotice,
      state.controlError,
      state.busyAction,
      getEntitySignatureFragment("setupComplete"),
      getEntitySignatureFragment("strategy"),
      ...FLOW_SETTING_KEYS.map(getEntitySignatureFragment),
      ...LIMIT_KEYS.map(getEntitySignatureFragment),
      ...(isCurveMode() ? CURVE_POINTS.map((point) => point.key) : POWER_HOUSE_KEYS).map(getEntitySignatureFragment),
    ].join("|");
  }

  function handleInput(event) {
    const field = event.target.dataset.oqField;
    if (!field) {
      return;
    }

    if (event.target.dataset.oqPauseDraft) {
      state.pauseResumeDraft = String(event.target.value || "");
      return;
    }

    if (event.target.type === "range" || event.target.type === "number") {
      if (event.target.type === "number") {
        state.inputDrafts[field] = event.target.value;
      }

      const numeric = parseLooseNumber(event.target.value);
      if (!Number.isNaN(numeric)) {
        const normalized = normalizeNumber(field, event.target.value);
        state.drafts[field] = normalized;
      }
    }
  }

  function handleChange(event) {
    const field = event.target.dataset.oqField;
    if (!field) {
      return;
    }

    const entity = ENTITY_DEFS[field];
    if (!entity) {
      return;
    }

    if (entity.domain === "select") {
      commitSelect(field, String(event.target.value));
      return;
    }

    if (entity.domain === "number") {
      commitNumber(field, event.target.value);
      return;
    }

    if (entity.domain === "time") {
      const normalized = normalizeTimeValue(event.target.value);
      if (!normalized) {
        state.controlError = `${entity.name} verwacht tijd als HH:MM.`;
        render();
        return;
      }
      commitTime(field, normalized);
      return;
    }

    if (entity.domain === "datetime") {
      const normalized = normalizeDateTimeValue(event.target.value);
      if (!normalized) {
        state.controlError = `${entity.name} verwacht datum en tijd.`;
        render();
        return;
      }
      commitDateTime(field, normalized);
    }
  }

  function handleClick(event) {
    const dateTimeControl = event.target.closest(".oq-settings-control--time, .oq-settings-control--datetime");
    if (dateTimeControl) {
      const pickerInput = dateTimeControl.querySelector('input[data-oq-field]');
      if (pickerInput && (pickerInput.type === "time" || pickerInput.type === "datetime-local") && typeof pickerInput.showPicker === "function") {
        try {
          pickerInput.showPicker();
        } catch (_error) {
          // Ignore browsers that block this call.
        }
      }
    }

    const infoButton = event.target.closest('[data-oq-action="toggle-settings-info"]');
    const infoWrap = event.target.closest("[data-oq-settings-info]");
    const helperHub = event.target.closest(".oq-helper-hub");
    const modalBackdrop = event.target.closest("[data-oq-modal]");
    if (infoButton) {
      const infoId = infoButton.dataset.infoId || "";
      state.settingsInfoOpen = state.settingsInfoOpen === infoId ? "" : infoId;
      render();
      return;
    }

    const button = event.target.closest("[data-oq-action]");
    const clickedOutsideInterfacePanel = state.interfacePanelOpen && !helperHub;
    if (!button) {
      let shouldRender = false;
      if (state.settingsInfoOpen && !infoWrap) {
        state.settingsInfoOpen = "";
        shouldRender = true;
      }
      if (clickedOutsideInterfacePanel) {
        setInterfacePanelOpen(false);
        shouldRender = true;
      }
      if (modalBackdrop && event.target === modalBackdrop) {
        if (state.updateModalOpen) {
          state.updateModalOpen = false;
          shouldRender = true;
        }
        if (state.systemModal) {
          state.systemModal = "";
          shouldRender = true;
        }
      }
      if (shouldRender) {
        render();
      }
      return;
    }
    if (clickedOutsideInterfacePanel && button.dataset.oqAction !== "toggle-interface-panel") {
      setInterfacePanelOpen(false);
    }

    const action = button.dataset.oqAction;
    if (action === "toggle-interface-panel") {
      setInterfacePanelOpen(!state.interfacePanelOpen);
      render();
      return;
    }

    if (action === "toggle-dev-panel") {
      setDevPanelOpen(!state.devPanelOpen);
      render();
      return;
    }

    if (action === "select-view") {
      setAppView(button.dataset.viewId || "overview", { syncMode: "push" });
      render();
      syncEntities();
      return;
    }

    if (action === "open-update-modal") {
      state.updateModalOpen = true;
      render();
      if (!hasKnownFirmwareTargetVersion() && !state.updateCheckBusy && !state.updateInstallBusy) {
        triggerFirmwareUpdateCheck();
      }
      return;
    }

    if (action === "open-connectivity-modal") {
      state.systemModal = "connectivity";
      render();
      return;
    }

    if (action === "open-restart-confirm") {
      state.systemModal = "restart-confirm";
      render();
      return;
    }

    if (action === "open-silent-settings-modal") {
      state.systemModal = "silent-settings";
      render();
      return;
    }

    if (action === "open-openquatt-pause-modal") {
      state.pauseResumeDraft = getOpenQuattPauseDraftValue();
      state.systemModal = "openquatt-pause";
      render();
      return;
    }

    if (action === "enable-openquatt-now") {
      commitOpenQuattRegulationResumeNow();
      return;
    }

    if (action === "apply-openquatt-preset") {
      const presetValue = getOpenQuattPausePresetValue(button.dataset.pausePreset || "");
      state.pauseResumeDraft = presetValue;
      commitOpenQuattRegulationPause(presetValue);
      return;
    }

    if (action === "apply-openquatt-indefinite") {
      commitOpenQuattRegulationPause("");
      return;
    }

    if (action === "apply-openquatt-custom-pause") {
      if (!String(state.pauseResumeDraft || "").trim()) {
        state.controlError = "Kies eerst een datum en tijd om automatisch te hervatten.";
        render();
        return;
      }
      commitOpenQuattRegulationPause(state.pauseResumeDraft || "");
      return;
    }

    if (action === "close-update-modal") {
      state.updateModalOpen = false;
      state.updateInstallCompleted = false;
      state.updateInstallCompletedVersion = "";
      render();
      return;
    }

    if (action === "close-system-modal") {
      state.systemModal = "";
      render();
      return;
    }

    if (action === "confirm-restart") {
      void triggerNamedButton("restartAction", {
        successNotice: "OpenQuatt wordt opnieuw opgestart. Wacht even tot de webinterface weer terugkomt.",
        errorPrefix: "Herstart mislukt",
      });
      return;
    }

    if (action === "select-surface") {
      const nextNativeOpen = button.dataset.surface === "native";
      if (state.nativeOpen === nextNativeOpen) {
        if (state.nativeOpen) {
          void ensureNativeFrontendLoaded();
        }
        return;
      }

      state.nativeOpen = nextNativeOpen;
      setStoredSurface(state.nativeOpen ? "native" : "app");
      state.controlError = "";
      state.controlNotice = "";
      state.settingsInfoOpen = "";
      state.updateModalOpen = false;
      if (state.nativeOpen) {
        void ensureNativeFrontendLoaded();
      }
      render();
      syncSurfaceRuntime();
      window.requestAnimationFrame(() => {
        if (state.nativeOpen) {
          if (state.nativeApp) {
            state.nativeApp.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      });
      return;
    }

    if (action === "toggle-overview-theme") {
      setOverviewTheme(state.overviewTheme === "light" ? "dark" : "light");
      render();
      return;
    }

    if (action === "select-hp-visual") {
      setHpVisualMode(button.dataset.hpVisual === "compact" ? "compact" : "schematic");
      render();
      return;
    }

    if (action === "select-hp-layout") {
      setHpLayoutMode(button.dataset.hpLayout || "equal");
      render();
      return;
    }

    if (action === "select-step") {
      state.currentStep = button.dataset.stepId || "strategy";
      render();
      return;
    }

    if (action === "previous-step") {
      selectQuickStepByOffset(-1);
      render();
      return;
    }

    if (action === "next-step") {
      selectQuickStepByOffset(1);
      render();
      return;
    }

    if (action === "select-settings-option") {
      const key = button.dataset.selectKey || "";
      const option = button.dataset.selectOption || "";
      if (key && option && String(getEntityValue(key) || "") !== option) {
        commitSelect(key, option);
      }
      return;
    }

    if (action === "toggle-overview-control") {
      const key = button.dataset.controlKey || "";
      const nextState = (button.dataset.controlState || "").toLowerCase();
      if (key && (nextState === "on" || nextState === "off")) {
        commitSwitch(key, nextState === "on");
      }
      return;
    }

    if (action === "select-overview-control-option") {
      const key = button.dataset.controlKey || "";
      const option = button.dataset.controlOption || "";
      if (key && option && String(getEntityValue(key) || "") !== option) {
        commitSelect(key, option);
      }
      return;
    }

    if (action === "suggest-curve-fallback") {
      const suggestion = getCurveFallbackSuggestion();
      if (suggestion) {
        commitNumber("curveFallbackSupply", suggestion.value, "Fallback-aanvoertemperatuur uit de stooklijn overgenomen.");
      }
      return;
    }

    if (action === "apply" || action === "reset") {
      triggerButton(action);
      return;
    }

    if (action === "run-firmware-check") {
      triggerFirmwareUpdateCheck();
      return;
    }

    if (action === "install-firmware-update") {
      installFirmwareUpdate();
      return;
    }

  }

  function handlePointerDown(event) {
    const point = event.target.closest("[data-curve-key]");
    if (!point || !isCurveMode()) {
      return;
    }

    state.draggingCurveKey = point.dataset.curveKey || "";
    updateCurveDraftFromPointer(event.clientY);
  }

  function handlePointerMove(event) {
    if (!state.draggingCurveKey) {
      return;
    }
    updateCurveDraftFromPointer(event.clientY);
  }

  function handlePointerUp() {
    if (!state.draggingCurveKey) {
      return;
    }

    const key = state.draggingCurveKey;
    const value = normalizeNumber(key, getEntityValue(key));
    state.draggingCurveKey = "";
    commitNumber(key, value, "Curvepunt bijgewerkt.");
  }

  async function commitSelect(key, option) {
    const entity = ENTITY_DEFS[key];
    state.busyAction = `save-${key}`;
    state.controlNotice = "";
    state.controlError = "";
    state.entities[key] = {
      ...(state.entities[key] || {}),
      state: option,
      value: option,
    };
    render();

    try {
      const response = await fetch(
        `${buildEntityPath(entity.domain, entity.name, "set")}?option=${encodeURIComponent(option)}`,
        { method: "POST" }
      );
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      delete state.drafts[key];
      delete state.inputDrafts[key];
      state.controlNotice = `${entity.name} bijgewerkt.`;
      if (key === "firmwareUpdateChannel") {
        state.updateInstallCompleted = false;
        state.updateInstallCompletedVersion = "";
        state.entities.firmwareUpdateChannel = {
          ...(state.entities.firmwareUpdateChannel || {}),
          state: option,
          value: option,
        };
        primeFirmwareUpdateState(option);
        render();
        await pollFirmwareUpdateState();
        state.controlNotice = "Releasekanaal bijgewerkt.";
      } else if (state.appView === "settings") {
        await refreshEntities(getSettingsRefreshKeys(), "state");
      } else {
        await refreshEntities(["setupComplete", "strategy", "openquattEnabled", "manualCoolingEnable", "silentModeOverride", ...FLOW_SETTING_KEYS, ...LIMIT_KEYS], "state");
      }
      if (key === "strategy" && state.appView !== "settings") {
        await refreshEntities(isCurveMode(option) ? CURVE_POINTS.map((point) => point.key) : POWER_HOUSE_KEYS, "state");
      }
    } catch (error) {
      state.controlError = `${entity.name} kon niet worden bijgewerkt. ${error.message}`;
    } finally {
      state.busyAction = "";
      render();
    }
  }

  async function commitSwitch(key, enabled) {
    const entity = ENTITY_DEFS[key];
    if (!entity) {
      return;
    }

    state.busyAction = `switch-${key}`;
    state.controlNotice = "";
    state.controlError = "";
    render();

    try {
      const action = enabled ? "turn_on" : "turn_off";
      const response = await fetch(buildEntityPath(entity.domain, entity.name, action), { method: "POST" });
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      state.entities[key] = {
        ...(state.entities[key] || {}),
        value: enabled,
        state: enabled,
      };
      state.controlNotice = `${entity.name} ${enabled ? "ingeschakeld" : "uitgeschakeld"}.`;
      state.busyAction = "";
      if (state.appView === "overview") {
        await refreshEntities([...OVERVIEW_KEYS, ...HEADER_ENTITY_KEYS, "setupComplete", ...FIRMWARE_ENTITY_KEYS], "state");
      } else if (state.appView === "settings") {
        await refreshEntities(getSettingsRefreshKeys(), "state");
      } else {
        await refreshEntities(["setupComplete", "strategy", "openquattEnabled", "manualCoolingEnable", "silentModeOverride", ...FLOW_SETTING_KEYS, ...LIMIT_KEYS], "state");
      }
      render();
    } catch (error) {
      state.controlError = `${entity.name} aanpassen mislukt (${error.message}).`;
      render();
    } finally {
      state.busyAction = "";
      render();
    }
  }

  async function triggerFirmwareUpdateCheck() {
    const entity = ENTITY_DEFS.checkFirmwareUpdates;
    if (!entity) {
      return;
    }

    state.updateInstallCompleted = false;
    state.updateInstallCompletedVersion = "";
    state.updateCheckBusy = true;
    state.controlError = "";
    state.controlNotice = "";
    primeFirmwareUpdateState();
    render();

    try {
      const response = await fetch(buildEntityPath(entity.domain, entity.name, "press"), {
        method: "POST",
      });
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      await pollFirmwareUpdateState();
      state.controlNotice = "Firmwarecontrole bijgewerkt.";
    } catch (error) {
      state.controlError = `Firmwarecontrole mislukte. ${error.message}`;
    } finally {
      state.updateCheckBusy = false;
      render();
    }
  }

  async function installFirmwareUpdate() {
    const entity = getFirmwareUpdateEntity();
    if (!entity) {
      return;
    }

    state.updateInstallCompleted = false;
    state.updateInstallCompletedVersion = "";
    state.updateInstallBusy = true;
    state.updateInstallTargetVersion = getFirmwareLatestVersion(entity);
    state.updateInstallPhaseHint = "starting";
    state.updateInstallProgressHint = 0;
    state.controlError = "";
    state.controlNotice = "";
    render();

    try {
      const response = await fetch(buildEntityPath("update", "Firmware Update", "install"), {
        method: "POST",
      });
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      const completed = await pollFirmwareInstallState();
      if (completed) {
        state.updateInstallCompleted = true;
        state.updateInstallCompletedVersion = getFirmwareCurrentVersion() || state.updateInstallTargetVersion;
        state.controlNotice = "";
      } else {
        state.controlNotice = "OTA-update gestart. Wacht tot het device weer online is.";
      }
    } catch (error) {
      state.controlError = `OTA-update kon niet worden gestart. ${error.message}`;
    } finally {
      resetFirmwareInstallUiState();
      render();
    }
  }

  async function commitNumber(key, value, successNotice = "") {
    const entity = ENTITY_DEFS[key];
    const normalized = normalizeNumber(key, value);
    state.busyAction = `save-${key}`;
    state.controlNotice = "";
    state.controlError = "";
    state.inputDrafts[key] = String(value ?? "");
    state.drafts[key] = normalized;
    render();

    try {
      const response = await fetch(
        `${buildEntityPath(entity.domain, entity.name, "set")}?value=${encodeURIComponent(normalized)}`,
        { method: "POST" }
      );
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      delete state.drafts[key];
      delete state.inputDrafts[key];
      state.controlNotice = successNotice || `${entity.name} bijgewerkt.`;
      await refreshEntities(
        state.appView === "settings"
          ? getSettingsRefreshKeys()
          : [...new Set([key, "setupComplete", "strategy", ...FLOW_SETTING_KEYS, ...LIMIT_KEYS])]
        ,
        "state"
      );
    } catch (error) {
      state.inputDrafts[key] = String(normalized).replace(".", ",");
      state.controlError = `${entity.name} kon niet worden bijgewerkt. ${error.message}`;
    } finally {
      state.busyAction = "";
      render();
    }
  }

  async function commitTime(key, value) {
    const entity = ENTITY_DEFS[key];
    const normalized = normalizeTimeValue(value);
    state.busyAction = `save-${key}`;
    state.controlNotice = "";
    state.controlError = "";
    render();

    try {
      const response = await fetch(
        `${buildEntityPath(entity.domain, entity.name, "set")}?value=${encodeURIComponent(normalized)}`,
        { method: "POST" }
      );
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      state.controlNotice = `${entity.name} bijgewerkt.`;
      await refreshEntities(
        state.appView === "settings"
          ? getSettingsRefreshKeys()
          : [key, "setupComplete"],
        "state"
      );
    } catch (error) {
      state.controlError = `${entity.name} kon niet worden bijgewerkt. ${error.message}`;
    } finally {
      state.busyAction = "";
      render();
    }
  }

  async function postDateTimeValue(key, value) {
    const entity = ENTITY_DEFS[key];
    const normalized = normalizeDateTimeValue(value) || OPENQUATT_RESUME_CLEAR_VALUE;
    const response = await fetch(
      `${buildEntityPath(entity.domain, entity.name, "set")}?value=${encodeURIComponent(normalized)}`,
      { method: "POST" }
    );
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    state.entities[key] = {
      ...(state.entities[key] || {}),
      value: normalized,
      state: normalized,
    };
    return normalized;
  }

  async function postSwitchState(key, enabled) {
    const entity = ENTITY_DEFS[key];
    const action = enabled ? "turn_on" : "turn_off";
    const response = await fetch(buildEntityPath(entity.domain, entity.name, action), { method: "POST" });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    state.entities[key] = {
      ...(state.entities[key] || {}),
      value: enabled,
      state: enabled,
    };
    return enabled;
  }

  async function refreshOpenQuattControlState() {
    await refreshEntities(
      [...new Set([...OVERVIEW_KEYS, ...HEADER_ENTITY_KEYS, "setupComplete", ...FIRMWARE_ENTITY_KEYS])],
      "state"
    );
  }

  async function commitDateTime(key, value) {
    const entity = ENTITY_DEFS[key];
    const normalized = normalizeDateTimeValue(value);
    state.busyAction = `save-${key}`;
    state.controlNotice = "";
    state.controlError = "";
    render();

    try {
      await postDateTimeValue(key, normalized);
      state.controlNotice = `${entity.name} bijgewerkt.`;
      await refreshEntities(
        state.appView === "settings"
          ? getSettingsRefreshKeys()
          : [key, "setupComplete", "openquattEnabled"],
        "state"
      );
    } catch (error) {
      state.controlError = `${entity.name} kon niet worden bijgewerkt. ${error.message}`;
    } finally {
      state.busyAction = "";
      render();
    }
  }

  async function commitOpenQuattRegulationPause(rawResumeValue) {
    const scheduledValue = normalizeDateTimeValue(rawResumeValue);
    if (rawResumeValue && !scheduledValue) {
      state.controlError = "Kies een geldig hervatmoment om automatisch weer in te schakelen.";
      render();
      return;
    }
    if (scheduledValue && !hasEntity("openquattResumeAt")) {
      state.controlError = "Automatisch hervatten is op deze firmware nog niet beschikbaar.";
      render();
      return;
    }

    state.busyAction = "openquatt-regulation";
    state.controlNotice = "";
    state.controlError = "";
    render();

    let resumeScheduled = false;
    try {
      if (hasEntity("openquattResumeAt")) {
        await postDateTimeValue("openquattResumeAt", scheduledValue || OPENQUATT_RESUME_CLEAR_VALUE);
        resumeScheduled = Boolean(scheduledValue);
      }
      await postSwitchState("openquattEnabled", false);
      state.pauseResumeDraft = scheduledValue ? toDateTimeInputValue(scheduledValue) : "";
      state.systemModal = "";
      state.controlNotice = scheduledValue
        ? `Openquatt regeling is tijdelijk uitgeschakeld tot ${formatOpenQuattResumeDateTime(scheduledValue)}.`
        : "Openquatt regeling is uitgeschakeld zonder eindmoment.";
      await refreshOpenQuattControlState();
    } catch (error) {
      if (resumeScheduled && hasEntity("openquattResumeAt")) {
        try {
          await postDateTimeValue("openquattResumeAt", OPENQUATT_RESUME_CLEAR_VALUE);
        } catch (_rollbackError) {
          // Best effort rollback to avoid leaving a stray resume moment behind.
        }
      }
      state.controlError = `Openquatt regeling kon niet worden bijgewerkt. ${error.message}`;
    } finally {
      state.busyAction = "";
      render();
    }
  }

  async function commitOpenQuattRegulationResumeNow() {
    state.busyAction = "openquatt-regulation";
    state.controlNotice = "";
    state.controlError = "";
    render();

    try {
      await postSwitchState("openquattEnabled", true);
      state.pauseResumeDraft = "";
      state.systemModal = "";
      state.controlNotice = "Openquatt regeling is weer actief.";
      await refreshOpenQuattControlState();
    } catch (error) {
      state.controlError = `Openquatt regeling kon niet worden ingeschakeld. ${error.message}`;
    } finally {
      state.busyAction = "";
      render();
    }
  }

  async function triggerButton(action) {
    const entity = ENTITY_DEFS[action];
    state.busyAction = action;
    state.controlError = "";
    state.controlNotice = "";
    render();

    try {
      const response = await fetch(buildEntityPath(entity.domain, entity.name, "press"), {
        method: "POST",
      });
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      state.controlNotice = action === "apply"
        ? "Setup gemarkeerd als afgerond."
        : "Quick Start teruggezet naar het begin. Huidige tuningwaarden blijven voorlopig staan.";
      await refreshEntities(["setupComplete"], "state");
      if (action === "reset") {
        state.currentStep = QUICK_STEPS[0].id;
      }
      setAppView(action === "apply" ? "overview" : QUICK_START_VIEW, { syncMode: "replace" });
    } catch (error) {
      state.controlError = `Actie mislukt voor "${entity.name}". ${error.message}`;
    } finally {
      state.busyAction = "";
      render();
    }
  }

  async function triggerNamedButton(key, options = {}) {
    const entity = ENTITY_DEFS[key];
    if (!entity) {
      return;
    }
    state.busyAction = key;
    state.controlError = "";
    state.controlNotice = "";
    render();

    try {
      const response = await fetch(buildEntityPath(entity.domain, entity.name, "press"), {
        method: "POST",
      });
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      state.systemModal = "";
      state.controlNotice = options.successNotice || `${entity.name} gestart.`;
      if (Array.isArray(options.refreshKeys) && options.refreshKeys.length) {
        await refreshEntities(options.refreshKeys, "state");
      }
    } catch (error) {
      state.controlError = `${options.errorPrefix || `Actie mislukt voor "${entity.name}"`}. ${error.message}`;
    } finally {
      state.busyAction = "";
      render();
    }
  }

  function updateCurveDraftFromPointer(clientY) {
    const svg = state.root ? state.root.querySelector(".oq-helper-curve-svg") : null;
    if (!svg || !state.draggingCurveKey) {
      return;
    }

    const rect = svg.getBoundingClientRect();
    const plotTop = 22;
    const plotHeight = 180;
    const localY = ((clientY - rect.top) / rect.height) * 240;
    const clampedY = Math.min(plotTop + plotHeight, Math.max(plotTop, localY));
    const value = 70 - ((clampedY - plotTop) / plotHeight) * 50;
    const normalized = normalizeNumber(state.draggingCurveKey, value);

    if (String(getEntityValue(state.draggingCurveKey)) !== String(normalized)) {
      state.drafts[state.draggingCurveKey] = normalized;
      render();
    }
  }

  function renderNumberInputControl({ key, value, meta, controlClass, inputClass = "oq-helper-input", unitMarkup = "" }) {
    return `
      <label class="${controlClass}">
        <input
          class="${inputClass}"
          type="number"
          data-oq-field="${escapeHtml(key)}"
          min="${meta.min}"
          max="${meta.max}"
          step="${meta.step}"
          value="${escapeHtml(value)}"
          ${state.loadingEntities ? "disabled" : ""}
        >
        ${unitMarkup}
      </label>
    `;
  }

  function renderNumberInputField(key, title, copy, options = {}) {
    const meta = getNumberMeta(key);
    const value = getInputDraftValue(key);
    return `
      <article class="oq-helper-control-card">
        <div class="oq-helper-control-copy">
          <h3>${escapeHtml(title)}</h3>
          <p>${escapeHtml(copy)}</p>
        </div>
        ${renderNumberInputControl({ key, value, meta, controlClass: "oq-helper-control oq-helper-control--split", unitMarkup: `<span class="oq-helper-unit">${escapeHtml(meta.uom || "")}</span>` })}
        ${options.footerMarkup || ""}
      </article>
    `;
  }

