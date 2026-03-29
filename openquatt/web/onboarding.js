(function () {
  const LOGO_MARKUP = `
    <img class="oq-helper-logo-mark" src="data:image/svg+xml;utf8,%3Csvg%20width=%22100%%22%20height=%22100%%22%20viewBox=%220%200%202680%20900%22%20version=%221.1%22%20xmlns=%22http://www.w3.org/2000/svg%22%20xmlns:xlink=%22http://www.w3.org/1999/xlink%22%20xml:space=%22preserve%22%20xmlns:serif=%22http://www.serif.com/%22%20style=%22fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;%22%3E%3Cg%3E%3Cpath%20d=%22M342.5,34.5C344.898,44.776%20347.898,54.776%20351.5,64.5C354.159,71.474%20356.826,78.474%20359.5,85.5C359.824,90.461%20361.491,94.794%20364.5,98.5C379.589,136.242%20397.089,172.909%20417,208.5C436.208,241.032%20456.208,273.032%20477,304.5C500.391,338.227%20523.391,372.227%20546,406.5C559.012,426.857%20570.179,448.19%20579.5,470.5C579.552,473.346%20580.552,475.68%20582.5,477.5C595.926,506.54%20603.426,537.207%20605,569.5C605.662,585.845%20605.495,602.178%20604.5,618.5C603.275,623.29%20602.608,628.29%20602.5,633.5C600.882,636.171%20600.215,639.171%20600.5,642.5C599.833,646.167%20599.167,649.833%20598.5,653.5C596.926,655.102%20596.259,657.102%20596.5,659.5L596.5,661.5C593.88,665.343%20592.213,669.676%20591.5,674.5C584.483,692.2%20576.15,709.2%20566.5,725.5C563.395,728.275%20561.062,731.608%20559.5,735.5C513.747,794.207%20454.081,828.873%20380.5,839.5C368.667,840.272%20357,841.272%20345.5,842.5C334.495,842.667%20323.495,842.5%20312.5,842C310.618,841.802%20308.952,841.302%20307.5,840.5C301.395,839.004%20295.062,838.337%20288.5,838.5L286.5,838.5C281.471,836.585%20276.137,835.585%20270.5,835.5C194.819,821.23%20137.319,780.897%2098,714.5C69.088,658.348%2060.088,599.014%2071,536.5C76.214,507.193%2085.214,479.193%2098,452.5C107.992,433.175%20118.992,414.508%20131,396.5C175.835,332.164%20219.168,266.83%20261,200.5C275.501,173.5%20289.501,146.167%20303,118.5C309.515,102.108%20316.182,85.775%20323,69.5C327.419,58.182%20331.086,46.516%20334,34.5C335.413,31.339%20337.08,28.339%20339,25.5C340.664,28.327%20341.83,31.327%20342.5,34.5Z%22%20style=%22fill:rgb(32,75,150);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M342.5,34.5C346.685,44.061%20349.685,54.061%20351.5,64.5C347.898,54.776%20344.898,44.776%20342.5,34.5Z%22%20style=%22fill:rgb(99,134,185);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M359.5,85.5C361.734,89.522%20363.401,93.856%20364.5,98.5C361.491,94.794%20359.824,90.461%20359.5,85.5Z%22%20style=%22fill:rgb(100,134,185);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M342.5,119.5C347.662,132.661%20352.329,145.995%20356.5,159.5C357.009,164.703%20358.676,169.37%20361.5,173.5L361.5,174.5C361.41,177.152%20362.076,179.485%20363.5,181.5C364.363,183.421%20365.029,185.421%20365.5,187.5C365.41,190.152%20366.076,192.485%20367.5,194.5C367.41,197.152%20368.076,199.485%20369.5,201.5C369.41,204.152%20370.076,206.485%20371.5,208.5C371.41,211.152%20372.076,213.485%20373.5,215.5C379.477,236.72%20383.811,258.387%20386.5,280.5C387.735,296.849%20389.235,313.182%20391,329.5C391.5,341.829%20391.667,354.162%20391.5,366.5L391.5,369.5C390.732,370.263%20390.232,371.263%20390,372.5C388.668,382.49%20387.501,392.49%20386.5,402.5C385.663,406.834%20385.163,411.168%20385,415.5C402.511,389.134%20412.345,360.134%20414.5,328.5C415.166,323.177%20415.499,317.677%20415.5,312C415.693,303.94%20415.027,296.107%20413.5,288.5C413.34,286.801%20413.506,285.134%20414,283.5C418.525,288.553%20422.025,294.219%20424.5,300.5C424.427,302.027%20425.094,303.027%20426.5,303.5C432.367,315.778%20438.033,328.112%20443.5,340.5C443.166,343.491%20444.166,345.824%20446.5,347.5C449.602,353.802%20451.936,360.469%20453.5,367.5C453.41,370.152%20454.076,372.485%20455.5,374.5C455.41,377.152%20456.076,379.485%20457.5,381.5C459.678,387.876%20461.011,394.543%20461.5,401.5C461.255,407.084%20461.922,412.417%20463.5,417.5C465.104,484.211%20437.437,534.878%20380.5,569.5C379.571,568.311%20379.238,566.978%20379.5,565.5C381.04,560.935%20381.707,556.102%20381.5,551C381.508,542.57%20380.508,534.403%20378.5,526.5C378.706,523.505%20378.04,520.838%20376.5,518.5C371.327,497.821%20362.16,479.154%20349,462.5C325.105,504.625%20306.438,548.958%20293,595.5C292,597.167%20291,598.833%20290,600.5C269.264,608.391%20247.764,613.558%20225.5,616C215.198,617.285%20204.865,618.118%20194.5,618.5C182.23,579.401%20181.397,540.068%20192,500.5C196.291,486.916%20201.958,473.916%20209,461.5C239.193,415.133%20266.86,367.133%20292,317.5C311.021,276.267%20324.521,233.267%20332.5,188.5C336.747,171.892%20339.08,154.892%20339.5,137.5C340.829,131.548%20341.829,125.548%20342.5,119.5Z%22%20style=%22fill:rgb(235,136,50);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M342.5,119.5C341.829,125.548%20340.829,131.548%20339.5,137.5C339.441,131.089%20340.108,124.756%20341.5,118.5C342.107,118.624%20342.44,118.957%20342.5,119.5Z%22%20style=%22fill:rgb(87,92,106);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M356.5,159.5C358.538,163.94%20360.204,168.607%20361.5,173.5C358.676,169.37%20357.009,164.703%20356.5,159.5Z%22%20style=%22fill:rgb(165,115,65);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M361.5,174.5C362.924,176.515%20363.59,178.848%20363.5,181.5C362.076,179.485%20361.41,177.152%20361.5,174.5Z%22%20style=%22fill:rgb(159,113,68);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M339.5,137.5C339.08,154.892%20336.747,171.892%20332.5,188.5C335.259,171.415%20337.592,154.415%20339.5,137.5Z%22%20style=%22fill:rgb(68,88,119);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M365.5,187.5C366.924,189.515%20367.59,191.848%20367.5,194.5C366.076,192.485%20365.41,190.152%20365.5,187.5Z%22%20style=%22fill:rgb(160,114,65);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M367.5,194.5C368.924,196.515%20369.59,198.848%20369.5,201.5C368.076,199.485%20367.41,197.152%20367.5,194.5Z%22%20style=%22fill:rgb(160,114,65);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M369.5,201.5C370.924,203.515%20371.59,205.848%20371.5,208.5C370.076,206.485%20369.41,204.152%20369.5,201.5Z%22%20style=%22fill:rgb(160,114,65);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M371.5,208.5C372.924,210.515%20373.59,212.848%20373.5,215.5C372.076,213.485%20371.41,211.152%20371.5,208.5Z%22%20style=%22fill:rgb(159,114,65);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M386.5,280.5C388.455,294.676%20390.288,309.009%20392,323.5C392.827,338.006%20392.661,352.339%20391.5,366.5C391.667,354.162%20391.5,341.829%20391,329.5C389.235,313.182%20387.735,296.849%20386.5,280.5Z%22%20style=%22fill:rgb(152,112,72);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M424.5,300.5C425.906,300.973%20426.573,301.973%20426.5,303.5C425.094,303.027%20424.427,302.027%20424.5,300.5Z%22%20style=%22fill:rgb(116,102,87);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M413.5,288.5C415.027,296.107%20415.693,303.94%20415.5,312C415.499,317.677%20415.166,323.177%20414.5,328.5C414.611,315.152%20414.277,301.819%20413.5,288.5Z%22%20style=%22fill:rgb(72,90,115);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M443.5,340.5C445.065,342.509%20446.065,344.843%20446.5,347.5C444.166,345.824%20443.166,343.491%20443.5,340.5Z%22%20style=%22fill:rgb(163,113,68);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M453.5,367.5C454.924,369.515%20455.59,371.848%20455.5,374.5C454.076,372.485%20453.41,370.152%20453.5,367.5Z%22%20style=%22fill:rgb(154,111,70);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M455.5,374.5C456.924,376.515%20457.59,378.848%20457.5,381.5C456.076,379.485%20455.41,377.152%20455.5,374.5Z%22%20style=%22fill:rgb(146,110,71);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M391.5,369.5C390.393,380.717%20388.726,391.717%20386.5,402.5C387.501,392.49%20388.668,382.49%20390,372.5C390.232,371.263%20390.732,370.263%20391.5,369.5Z%22%20style=%22fill:rgb(172,117,60);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M461.5,401.5C462.957,406.598%20463.624,411.931%20463.5,417.5C461.922,412.417%20461.255,407.084%20461.5,401.5Z%22%20style=%22fill:rgb(162,115,62);%22/%3E%3C/g%3E%3Cpath%20d=%22M770.5,570.5C770.624,558.467%20771.291,546.467%20772.5,534.5C784.157,497.354%20809.157,474.521%20847.5,466C880.205,459.456%20912.205,461.789%20943.5,473C982.389,491.928%201000.22,523.095%20997,566.5C993.473,609.041%20971.306,636.875%20930.5,650C898.056,657.651%20865.723,657.318%20833.5,649C795.64,636.312%20774.64,610.145%20770.5,570.5ZM871.5,499.5C850.829,501.845%20834.829,511.845%20823.5,529.5C817.349,545.355%20815.849,561.688%20819,578.5C827.176,602.001%20843.676,615.168%20868.5,618C880.872,618.843%20893.205,618.51%20905.5,617C916.036,614.068%20925.369,609.068%20933.5,602C947.743,586.159%20952.91,567.659%20949,546.5C945.933,530.572%20937.766,518.072%20924.5,509C907.738,501.231%20890.071,498.065%20871.5,499.5Z%22%20style=%22fill:rgb(58,137,243);%22/%3E%3Cg%3E%3Cpath%20d=%22M1730.5,462.5C1767.07,457.724%201800.07,466.224%201829.5,488C1854.6,510.952%201864.43,539.452%201859,573.5C1855.37,592.26%201846.87,608.426%201833.5,622C1843.36,630.945%201854.02,638.945%201865.5,646C1865.96,646.414%201866.29,646.914%201866.5,647.5C1855.27,655.867%201843.1,662.534%201830,667.5L1826.5,667C1817.17,658.83%201807.17,651.663%201796.5,645.5C1764.49,656.072%201732.16,657.239%201699.5,649C1657.04,634.356%201635.04,604.522%201633.5,559.5C1634.57,513.946%201656.57,483.78%201699.5,469C1709.73,465.721%201720.07,463.554%201730.5,462.5ZM1736.5,500.5C1734.03,501.317%201731.36,501.817%201728.5,502C1708.29,506.676%201694.12,518.51%201686,537.5C1677.76,564.709%201683.92,587.875%201704.5,607C1724.13,618.699%201744.8,620.699%201766.5,613C1766.96,612.586%201767.29,612.086%201767.5,611.5C1760.83,603.167%201754.17,594.833%201747.5,586.5C1757.11,584.807%201766.77,584.307%201776.5,585C1783.19,586.517%201788.86,589.85%201793.5,595C1794.83,595.667%201796.17,595.667%201797.5,595C1803.01,589.155%201806.84,582.321%201809,574.5C1816.34,548.188%201809.18,527.022%201787.5,511C1771.64,502.386%201754.64,498.886%201736.5,500.5Z%22%20style=%22fill:rgb(237,137,51);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M1567.5,469.5L1567.5,468.5L1613.5,468.5C1613.82,475.354%201613.49,482.021%201612.5,488.5L1612.5,469.5L1567.5,469.5Z%22%20style=%22fill:rgb(150,197,244);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M2250.5,648.5C2246.6,635.923%202241.93,623.589%202236.5,611.5L2148.5,611.5C2143.4,624.387%202138.06,637.221%202132.5,650C2115.84,650.5%202099.17,650.667%202082.5,650.5C2084.36,644.426%202086.52,638.426%202089,632.5C2113.11,579.272%202137.11,525.605%202161,471.5C2161.83,470.667%202162.67,469.833%202163.5,469C2181.5,468.333%202199.5,468.333%202217.5,469C2219.43,469.251%202221.27,469.751%202223,470.5C2249.4,530.543%202275.9,590.543%202302.5,650.5C2284.93,651.131%202267.6,650.464%202250.5,648.5ZM2191.5,506.5C2184.26,525.657%202176.43,544.657%202168,563.5C2166.19,568.435%202164.69,573.435%202163.5,578.5C2183.18,578.833%202202.84,578.5%202222.5,577.5C2212.84,555.691%202203.68,533.691%202195,511.5C2194.1,509.569%202192.93,507.903%202191.5,506.5Z%22%20style=%22fill:rgb(237,138,51);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M2485.5,469.5L2485.5,468.5L2665.5,468.5L2665.5,505.5L2597.5,505.5C2619.66,504.503%202641.99,504.169%202664.5,504.5L2664.5,469.5L2485.5,469.5Z%22%20style=%22fill:rgb(238,166,89);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M1140.5,469.5C1189.37,473.874%201212.21,500.541%201209,549.5C1203.39,574.448%201188.55,591.281%201164.5,600C1154.02,602.877%201143.36,604.544%201132.5,605C1111.84,605.5%201091.17,605.667%201070.5,605.5C1069.5,620.324%201069.17,635.324%201069.5,650.5L1026.5,650.5L1026.5,469.5L1140.5,469.5ZM1070.5,568.5C1088,569.662%201105.66,569.829%201123.5,569C1126.04,568.814%201128.37,568.314%201130.5,567.5C1143.25,567.715%201152.75,562.381%201159,551.5C1167.31,525.808%201158.15,510.641%201131.5,506C1111.17,505.5%201090.84,505.333%201070.5,505.5L1070.5,568.5Z%22%20style=%22fill:rgb(57,137,243);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M1280.5,592.5C1279.51,599.648%201279.18,606.981%201279.5,614.5L1391.5,614.5L1391.5,650.5C1339.62,651.155%201287.95,650.489%201236.5,648.5C1235.4,593.506%201235.24,538.506%201236,483.5C1236.17,478.798%201236.67,474.132%201237.5,469.5C1288.46,468.505%201339.46,468.171%201390.5,468.5L1390.5,505.5L1279.5,505.5L1279.5,543.5L1381.5,543.5L1381.5,577.5L1280.5,577.5L1280.5,592.5Z%22%20style=%22fill:rgb(59,138,243);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M1565.5,588.5C1565.78,589.289%201566.28,589.956%201567,590.5C1567.5,550.168%201567.67,509.835%201567.5,469.5L1612.5,469.5L1612.5,511.5C1611.5,557.664%201611.17,603.997%201611.5,650.5L1562.5,650.5C1557.11,644.758%201551.95,638.758%201547,632.5C1520.72,597.881%201494.05,563.547%201467,529.5C1466.5,569.832%201466.33,610.165%201466.5,650.5L1423.5,650.5C1423.74,649.209%201423.4,648.209%201422.5,647.5L1422.5,468.5C1438.86,468.217%201455.19,468.717%201471.5,470C1503.05,509.375%201534.38,548.875%201565.5,588.5Z%22%20style=%22fill:rgb(56,137,243);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M1567.5,468.5L1567.5,469.5C1567.67,509.835%201567.5,550.168%201567,590.5C1566.28,589.956%201565.78,589.289%201565.5,588.5C1566.17,548.5%201566.83,508.5%201567.5,468.5Z%22%20style=%22fill:rgb(207,231,249);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M1930.5,469.5C1931.33,507.331%201931.83,545.331%201932,583.5C1935.1,602.599%201946.27,613.766%201965.5,617C1976.97,618.124%201988.3,617.457%201999.5,615C2016.51,607.805%202025.18,594.972%202025.5,576.5C2026.5,541.004%202026.83,505.337%202026.5,469.5L2072.5,469.5L2072.5,585.5C2065.58,626.254%202041.58,649.087%202000.5,654C1983.83,654.667%201967.17,654.667%201950.5,654C1911.32,647.657%201889.32,624.823%201884.5,585.5L1884.5,469.5L1930.5,469.5Z%22%20style=%22fill:rgb(237,137,51);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M2072.5,585.5L2072.5,469.5L2026.5,469.5C2026.83,505.337%202026.5,541.004%202025.5,576.5L2025.5,468.5L2073.5,468.5C2073.83,507.67%202073.5,546.67%202072.5,585.5Z%22%20style=%22fill:rgb(241,189,131);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M2461.5,468.5C2462.92,469.451%202464.59,469.784%202466.5,469.5L2466.5,504.5C2442.33,504.169%202418.33,504.502%202394.5,505.5L2394.5,650.5L2348.5,650.5L2348.5,642.5C2349.5,596.67%202349.83,550.67%202349.5,504.5L2282.5,504.5L2282.5,469.5C2342.14,468.515%202401.81,468.182%202461.5,468.5Z%22%20style=%22fill:rgb(237,137,50);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M2485.5,469.5L2664.5,469.5L2664.5,504.5C2641.99,504.169%202619.66,504.503%202597.5,505.5L2597.5,650.5L2549.5,650.5L2549.5,505.5C2528.34,504.503%202507.01,504.169%202485.5,504.5L2485.5,469.5Z%22%20style=%22fill:rgb(237,137,50);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M579.5,470.5C581.065,472.509%20582.065,474.843%20582.5,477.5C580.552,475.68%20579.552,473.346%20579.5,470.5Z%22%20style=%22fill:rgb(115,147,192);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M2282.5,469.5L2282.5,504.5L2349.5,504.5C2349.83,550.67%202349.5,596.67%202348.5,642.5L2348.5,505.5L2281.5,505.5C2281.17,493.322%202281.5,481.322%202282.5,469.5Z%22%20style=%22fill:rgb(242,189,128);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M2461.5,468.5L2467.5,468.5L2467.5,505.5L2394.5,505.5C2418.33,504.502%202442.33,504.169%202466.5,504.5L2466.5,469.5C2464.59,469.784%202462.92,469.451%202461.5,468.5Z%22%20style=%22fill:rgb(242,189,130);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M2485.5,468.5L2485.5,504.5C2507.01,504.169%202528.34,504.503%202549.5,505.5L2484.5,505.5C2484.17,492.989%202484.5,480.655%202485.5,468.5Z%22%20style=%22fill:rgb(242,190,132);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M1930.5,469.5L1884.5,469.5L1884.5,585.5C1883.5,546.67%201883.17,507.67%201883.5,468.5C1899.34,468.17%201915.01,468.504%201930.5,469.5Z%22%20style=%22fill:rgb(237,158,73);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M376.5,518.5C378.04,520.838%20378.706,523.505%20378.5,526.5C377.232,524.095%20376.565,521.428%20376.5,518.5Z%22%20style=%22fill:rgb(87,94,104);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M378.5,526.5C380.508,534.403%20381.508,542.57%20381.5,551C381.707,556.102%20381.04,560.935%20379.5,565.5C379.633,552.484%20379.299,539.484%20378.5,526.5Z%22%20style=%22fill:rgb(85,90,113);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M772.5,534.5C771.291,546.467%20770.624,558.467%20770.5,570.5C769.343,562.344%20769.177,554.01%20770,545.5C770.419,541.608%20771.252,537.942%20772.5,534.5Z%22%20style=%22fill:rgb(133,185,245);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M557.5,586.5C558.058,587.79%20559.058,588.623%20560.5,589C522.875,585.446%20485.541,587.446%20448.5,595C434.071,598.718%20419.738,602.718%20405.5,607C370.079,620.14%20334.413,632.473%20298.5,644C273.593,650.707%20248.26,655.04%20222.5,657C190.507,659.068%20160.174,653.068%20131.5,639C123.345,633.67%20115.345,628.17%20107.5,622.5C105.421,616.1%20104.588,609.434%20105,602.5C116.716,610.408%20128.883,617.575%20141.5,624C155.181,628.731%20169.181,631.897%20183.5,633.5C212.901,636.3%20241.901,633.967%20270.5,626.5C281.24,624.319%20291.907,621.819%20302.5,619C334.064,607.256%20366.064,596.923%20398.5,588C425.538,580.804%20453.038,576.971%20481,576.5C507.102,575.435%20532.602,578.768%20557.5,586.5Z%22%20style=%22fill:rgb(129,203,242);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M557.5,586.5C562.457,587.989%20567.457,589.323%20572.5,590.5C564.464,682.071%20518.464,746.571%20434.5,784C365.129,810.657%20296.129,809.991%20227.5,782C160.3,749.489%20120.3,696.322%20107.5,622.5C115.345,628.17%20123.345,633.67%20131.5,639C160.174,653.068%20190.507,659.068%20222.5,657C248.26,655.04%20273.593,650.707%20298.5,644C334.413,632.473%20370.079,620.14%20405.5,607C419.738,602.718%20434.071,598.718%20448.5,595C485.541,587.446%20522.875,585.446%20560.5,589C559.058,588.623%20558.058,587.79%20557.5,586.5Z%22%20style=%22fill:rgb(56,136,242);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M1280.5,592.5L1280.5,613.5L1369.5,613.5L1369.5,614.5L1279.5,614.5C1279.18,606.981%201279.51,599.648%201280.5,592.5Z%22%20style=%22fill:rgb(201,224,248);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M604.5,618.5C604.698,623.75%20604.031,628.75%20602.5,633.5C602.608,628.29%20603.275,623.29%20604.5,618.5Z%22%20style=%22fill:rgb(166,187,215);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M270.5,626.5C241.901,633.967%20212.901,636.3%20183.5,633.5C201.187,633.711%20218.854,633.211%20236.5,632C247.833,630.055%20259.167,628.222%20270.5,626.5Z%22%20style=%22fill:rgb(58,111,176);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M602.5,633.5C602.785,636.829%20602.118,639.829%20600.5,642.5C600.215,639.171%20600.882,636.171%20602.5,633.5Z%22%20style=%22fill:rgb(131,159,199);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M1369.5,614.5L1369.5,613.5L1392.5,613.5L1392.5,651.5L1236.5,651.5L1236.5,648.5C1287.95,650.489%201339.62,651.155%201391.5,650.5L1391.5,614.5L1369.5,614.5Z%22%20style=%22fill:rgb(118,177,243);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M1422.5,647.5C1423.4,648.209%201423.74,649.209%201423.5,650.5L1466.5,650.5C1452.01,651.496%201437.34,651.829%201422.5,651.5L1422.5,647.5Z%22%20style=%22fill:rgb(152,199,248);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M1612.5,511.5L1612.5,651.5C1595.66,651.83%201578.99,651.497%201562.5,650.5L1611.5,650.5C1611.17,603.997%201611.5,557.664%201612.5,511.5Z%22%20style=%22fill:rgb(123,180,244);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M2394.5,505.5L2395.5,505.5L2395.5,651.5C2379.66,651.83%202363.99,651.496%202348.5,650.5L2394.5,650.5L2394.5,505.5Z%22%20style=%22fill:rgb(246,212,172);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M598.5,653.5C598.741,655.898%20598.074,657.898%20596.5,659.5C596.259,657.102%20596.926,655.102%20598.5,653.5Z%22%20style=%22fill:rgb(143,169,203);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M596.5,661.5C595.401,666.144%20593.734,670.478%20591.5,674.5C592.213,669.676%20593.88,665.343%20596.5,661.5Z%22%20style=%22fill:rgb(114,148,193);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M566.5,725.5C564.938,729.392%20562.605,732.725%20559.5,735.5C561.062,731.608%20563.395,728.275%20566.5,725.5Z%22%20style=%22fill:rgb(163,185,212);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M270.5,835.5C276.137,835.585%20281.471,836.585%20286.5,838.5C280.939,838.044%20275.606,837.044%20270.5,835.5Z%22%20style=%22fill:rgb(85,124,178);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M288.5,838.5C295.062,838.337%20301.395,839.004%20307.5,840.5C300.95,840.546%20294.617,839.879%20288.5,838.5Z%22%20style=%22fill:rgb(89,126,180);%22/%3E%3C/g%3E%3Cg%3E%3Cpath%20d=%22M380.5,839.5C369.102,841.86%20357.435,842.86%20345.5,842.5C357,841.272%20368.667,840.272%20380.5,839.5Z%22%20style=%22fill:rgb(125,154,196);%22/%3E%3C/g%3E%3C/svg%3E" alt="OpenQuatt logo">
  `;

  const QUICK_STEPS = [
    {
      id: "strategy",
      kicker: "Stap 1",
      title: "Kies de verwarmingsstrategie",
      copy: "Begin met de hoofdstrategie. In de route-1 app schrijft dit direct naar de echte control-mode entity, zonder extra onboarding-proxy.",
      fields: [
        {
          title: "Verwarmingsstrategie",
          copy: "Power House stuurt meer op vermogensbewust gedrag. Water Temperature Control sluit meer aan op een heating-curve aanpak.",
        },
      ],
    },
    {
      id: "behavior",
      kicker: "Stap 2",
      title: "Stem het responsprofiel af",
      copy: "Dit is de vriendelijkere laag boven de technische responsprofielen. De app kan hier wording verbeteren zonder de onderliggende entities te veranderen.",
      fields: [
        {
          title: "Gedrag",
          copy: "Koppelt het technische responsprofiel aan een eenvoudiger label.",
        },
        {
          title: "Preset",
          copy: "Zet een gegroepeerd startpunt voor de meest gebruikte limieten.",
        },
      ],
    },
    {
      id: "limits",
      kicker: "Stap 3",
      title: "Stel de bedrijfsgrenzen in",
      copy: "Dit zijn de belangrijkste praktische grenzen voor dagelijks gebruik. In de uiteindelijke app schrijven deze direct naar de canonieke OpenQuatt-limieten.",
      fields: [
        {
          title: "Dag max",
          copy: "Maximaal compressorniveau tijdens normaal dagbedrijf.",
        },
        {
          title: "Silent max",
          copy: "Maximaal compressorniveau tijdens het silent-venster.",
        },
        {
          title: "Max watertemp",
          copy: "Bovengrens voor de aanvoertemperatuur in het standaard verwarmingscircuit.",
        },
      ],
    },
    {
      id: "confirm",
      kicker: "Stap 4",
      title: "Bevestigen en afronden",
      copy: "De samenvatting wordt de bevestigingsstap. Zo blijft de onboardinglaag licht, terwijl de echte device-instellingen de bron van waarheid blijven.",
      fields: [
        {
          title: "Toepassen en afronden",
          copy: "Markeert de setup als afgerond zonder een tweede laag met dubbele instellingen te maken.",
        },
        {
          title: "Opnieuw beginnen",
          copy: "Zet de onboarding terug naar Quick Start. Voorlopig worden tuningwaarden nog niet automatisch naar defaults teruggezet.",
        },
      ],
    },
  ];

  const ADVANCED_GROUPS = [
    {
      title: "Capaciteitscoordinatie",
      copy: "Deze instellingen bepalen wanneer een tweede warmtepomp bijschakelt of weer afvalt. Dit zijn logische advanced-kandidaten, omdat ze vooral de topologie sturen en minder het dagelijkse comfort.",
      fields: [
        "Dual HP Enable Level",
        "Dual HP Enable Hold",
        "Dual HP Disable Hold",
      ],
    },
    {
      title: "Temperatuurgrenzen",
      copy: "Dit zijn de meer technische grenzen rond water temperature control en protectiebanden.",
      fields: [
        "Water temperature soft band",
        "Maximum water temperature trip",
      ],
    },
    {
      title: "Compressor exclusions",
      copy: "Nuttig voor technische diagnose en hardware-specifieke tuning, maar waarschijnlijk te diep voor onboarding.",
      fields: [
        "HP1 - Excluded compressor level A",
        "HP1 - Excluded compressor level B",
        "HP2 - Excluded compressor level A",
        "HP2 - Excluded compressor level B",
      ],
    },
  ];

  const ENTITY_DEFS = {
    summary: { domain: "text_sensor", name: "Summary" },
    strategy: { domain: "select", name: "Heating Control Mode" },
    controlModeLabel: { domain: "text_sensor", name: "Control Mode (Label)" },
    flowMode: { domain: "text_sensor", name: "Flow Mode" },
    behavior: { domain: "select", name: "Behavior" },
    preset: { domain: "select", name: "Preset" },
    dayMax: { domain: "number", name: "Day max level" },
    silentMax: { domain: "number", name: "Silent max level" },
    maxWater: { domain: "number", name: "Maximum water temperature" },
    totalPower: { domain: "sensor", name: "Total Power Input" },
    totalCop: { domain: "sensor", name: "Total COP" },
    totalHeat: { domain: "sensor", name: "Total Heat Power" },
    flowSelected: { domain: "sensor", name: "Flow average (Selected)" },
    roomTemp: { domain: "sensor", name: "Room Temperature (Selected)" },
    roomSetpoint: { domain: "sensor", name: "Room Setpoint (Selected)" },
    supplyTemp: { domain: "sensor", name: "Water Supply Temp (Selected)" },
    curveSupplyTarget: { domain: "sensor", name: "Heating Curve Supply Target" },
    silentActive: { domain: "binary_sensor", name: "Silent active" },
    stickyActive: { domain: "binary_sensor", name: "Sticky pump active" },
    housePower: { domain: "number", name: "Rated maximum house power" },
    houseOutdoorMax: { domain: "number", name: "Maximum heating outdoor temperature" },
    curveM20: { domain: "number", name: "Curve Tsupply @ -20°C" },
    curveM10: { domain: "number", name: "Curve Tsupply @ -10°C" },
    curve0: { domain: "number", name: "Curve Tsupply @ 0°C" },
    curve5: { domain: "number", name: "Curve Tsupply @ 5°C" },
    curve10: { domain: "number", name: "Curve Tsupply @ 10°C" },
    curve15: { domain: "number", name: "Curve Tsupply @ 15°C" },
    hp1Power: { domain: "sensor", name: "HP1 - Power Input" },
    hp1Heat: { domain: "sensor", name: "HP1 - Heat Power" },
    hp1Cop: { domain: "sensor", name: "HP1 - COP" },
    hp1Compressor: { domain: "sensor", name: "HP1 compressor level" },
    hp1Freq: { domain: "sensor", name: "HP1 - Compressor frequency" },
    hp1WaterIn: { domain: "sensor", name: "HP1 - Water in temperature" },
    hp1WaterOut: { domain: "sensor", name: "HP1 - Water out temperature" },
    hp1Mode: { domain: "text_sensor", name: "HP1 - Working Mode Label" },
    hp1Failures: { domain: "text_sensor", name: "HP1 - Active Failures List" },
    hp1Defrost: { domain: "binary_sensor", name: "HP1 - Defrost" },
    hp2Power: { domain: "sensor", name: "HP2 - Power Input", optional: true },
    hp2Heat: { domain: "sensor", name: "HP2 - Heat Power", optional: true },
    hp2Cop: { domain: "sensor", name: "HP2 - COP", optional: true },
    hp2Compressor: { domain: "sensor", name: "HP2 compressor level", optional: true },
    hp2Freq: { domain: "sensor", name: "HP2 - Compressor frequency", optional: true },
    hp2WaterIn: { domain: "sensor", name: "HP2 - Water in temperature", optional: true },
    hp2WaterOut: { domain: "sensor", name: "HP2 - Water out temperature", optional: true },
    hp2Mode: { domain: "text_sensor", name: "HP2 - Working Mode Label", optional: true },
    hp2Failures: { domain: "text_sensor", name: "HP2 - Active Failures List", optional: true },
    hp2Defrost: { domain: "binary_sensor", name: "HP2 - Defrost", optional: true },
    apply: { domain: "button", name: "Apply & Finish" },
    reset: { domain: "button", name: "Start Over" },
  };

  const APP_VIEWS = [
    { id: "onboarding", label: "Onboarding" },
    { id: "overview", label: "Overzicht" },
    { id: "settings", label: "Instellingen" },
  ];

  const CURVE_POINTS = [
    { key: "curveM20", outdoor: -20, label: "-20°C" },
    { key: "curveM10", outdoor: -10, label: "-10°C" },
    { key: "curve0", outdoor: 0, label: "0°C" },
    { key: "curve5", outdoor: 5, label: "5°C" },
    { key: "curve10", outdoor: 10, label: "10°C" },
    { key: "curve15", outdoor: 15, label: "15°C" },
  ];

  const POWER_HOUSE_KEYS = ["housePower", "houseOutdoorMax"];
  const LIMIT_KEYS = ["dayMax", "silentMax", "maxWater"];
  const OVERVIEW_KEYS = [
    "summary",
    "strategy",
    "controlModeLabel",
    "flowMode",
    "totalPower",
    "totalCop",
    "totalHeat",
    "flowSelected",
    "roomTemp",
    "roomSetpoint",
    "supplyTemp",
    "curveSupplyTarget",
    "silentActive",
    "stickyActive",
    "hp1Power",
    "hp1Heat",
    "hp1Cop",
    "hp1Freq",
    "hp1WaterIn",
    "hp1WaterOut",
    "hp1Mode",
    "hp1Failures",
    "hp1Defrost",
    "hp2Power",
    "hp2Heat",
    "hp2Cop",
    "hp2Freq",
    "hp2WaterIn",
    "hp2WaterOut",
    "hp2Mode",
    "hp2Failures",
    "hp2Defrost",
  ];
  const SETTINGS_KEYS = [
    "strategy",
    "behavior",
    "preset",
    ...LIMIT_KEYS,
    ...POWER_HOUSE_KEYS,
    ...CURVE_POINTS.map((point) => point.key),
  ];
  const POLL_INTERVAL_MS = 4000;

  const state = {
    mounted: false,
    root: null,
    nativeApp: null,
    pollTimer: null,
    summary: "Huidige setup laden...",
    stage: "Laden...",
    helperOpen: true,
    advancedOpen: false,
    nativeOpen: false,
    currentStep: "strategy",
    appView: "",
    overviewTheme: getStoredOverviewTheme(),
    hpVisualMode: getStoredHpVisualMode(),
    busyAction: "",
    controlError: "",
    controlNotice: "",
    complete: false,
    loadingEntities: true,
    entities: {},
    drafts: {},
    focusedField: "",
    draggingCurveKey: "",
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
  }

  function mountWhenReady() {
    const app = document.querySelector("esp-app");
    if (!app) {
      window.setTimeout(mountWhenReady, 250);
      return;
    }

    state.nativeApp = app;

    if (!state.mounted) {
      mountPanel(app);
      primeEntities();
      state.pollTimer = window.setInterval(syncEntities, POLL_INTERVAL_MS);
      state.mounted = true;
    }

    syncNativeVisibility();
    syncEntities();
  }

  function mountPanel(app) {
    const root = document.createElement("section");
    root.id = "oq-helper-root";
    app.parentNode.insertBefore(root, app);
    root.addEventListener("click", handleClick);
    root.addEventListener("change", handleChange);
    root.addEventListener("input", handleInput);
    root.addEventListener("focusin", handleFocusChange);
    root.addEventListener("focusout", handleFocusChange);
    root.addEventListener("pointerdown", handlePointerDown);
    state.root = root;
    render();
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
    const numeric = Number(rawValue);
    if (Number.isNaN(numeric)) {
      return meta.min;
    }
    const clamped = Math.min(meta.max, Math.max(meta.min, numeric));
    const steps = Math.round((clamped - meta.min) / meta.step);
    const snapped = meta.min + steps * meta.step;
    return Number(snapped.toFixed(meta.step < 1 ? 1 : 0));
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
    const results = await Promise.allSettled(
      keys.map(async (key) => ({ key, payload: await fetchEntityPayload(key, detail) }))
    );

    let firstError = "";
    results.forEach((result, index) => {
      const key = keys[index];
      if (result.status === "fulfilled") {
        const { payload } = result.value;
        state.entities[key] = {
          ...(state.entities[key] || {}),
          ...payload,
        };
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
    const summaryValue = state.entities.summary?.state || state.entities.summary?.value;
    state.summary = typeof summaryValue === "string" ? summaryValue : "Samenvatting niet beschikbaar";
    state.complete = state.summary.includes("setup complete");
    state.stage = state.complete ? "Gereed" : "Quick Start";
    if (!state.appView) {
      state.appView = state.complete ? "overview" : "onboarding";
    }
  }

  async function primeEntities() {
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
    if (state.loadingEntities || state.focusedField || state.draggingCurveKey || state.busyAction) {
      return;
    }

    const keys = state.appView === "overview"
      ? [...OVERVIEW_KEYS, "summary"]
      : state.appView === "settings"
        ? ["summary", ...SETTINGS_KEYS]
        : [
            "summary",
            "strategy",
            "behavior",
            "preset",
            ...LIMIT_KEYS,
            ...(isCurveMode() ? CURVE_POINTS.map((point) => point.key) : POWER_HOUSE_KEYS),
          ];

    try {
      await refreshEntities(keys, "state");
      render();
    } catch (error) {
      state.controlError = `Helperstatus kon niet worden geladen. ${error.message}`;
      render();
    }
  }

  function handleFocusChange() {
    window.setTimeout(() => {
      const active = document.activeElement;
      state.focusedField = active && active.dataset ? active.dataset.oqField || "" : "";
    }, 0);
  }

  function handleInput(event) {
    const field = event.target.dataset.oqField;
    if (!field) {
      return;
    }

    if (event.target.type === "range" || event.target.type === "number") {
      const normalized = normalizeNumber(field, event.target.value);
      state.drafts[field] = normalized;
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
      commitNumber(field, normalizeNumber(field, event.target.value));
    }
  }

  function handleClick(event) {
    const button = event.target.closest("[data-oq-action]");
    if (!button) {
      return;
    }

    const action = button.dataset.oqAction;
    if (action === "toggle-helper") {
      state.helperOpen = !state.helperOpen;
      render();
      return;
    }

    if (action === "select-view") {
      state.appView = button.dataset.viewId || "overview";
      render();
      syncEntities();
      return;
    }

    if (action === "toggle-advanced") {
      state.advancedOpen = !state.advancedOpen;
      render();
      return;
    }

    if (action === "toggle-native") {
      state.nativeOpen = !state.nativeOpen;
      render();
      return;
    }

    if (action === "toggle-overview-theme") {
      setOverviewTheme(state.overviewTheme === "light" ? "dark" : "light");
      render();
      return;
    }

    if (action === "toggle-hp-visual") {
      setHpVisualMode(state.hpVisualMode === "schematic" ? "compact" : "schematic");
      render();
      return;
    }

    if (action === "select-step") {
      state.currentStep = button.dataset.stepId || "strategy";
      render();
      return;
    }

    if (action === "apply" || action === "reset") {
      triggerButton(action);
      return;
    }

    if (action === "jump-native") {
      state.nativeOpen = true;
      render();
      window.requestAnimationFrame(() => {
        if (state.nativeApp) {
          state.nativeApp.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
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
      state.controlNotice = `${entity.name} bijgewerkt.`;
      await refreshEntities(["summary", "strategy", "behavior", "preset"], "state");
      if (key === "strategy") {
        await refreshEntities(isCurveMode(option) ? CURVE_POINTS.map((point) => point.key) : POWER_HOUSE_KEYS, "state");
      }
    } catch (error) {
      state.controlError = `${entity.name} kon niet worden bijgewerkt. ${error.message}`;
    } finally {
      state.busyAction = "";
      render();
    }
  }

  async function commitNumber(key, value, successNotice = "") {
    const entity = ENTITY_DEFS[key];
    const normalized = normalizeNumber(key, value);
    state.busyAction = `save-${key}`;
    state.controlNotice = "";
    state.controlError = "";
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
      state.controlNotice = successNotice || `${entity.name} bijgewerkt.`;
      await refreshEntities([key, "summary", "preset", "behavior"], "state");
    } catch (error) {
      state.controlError = `${entity.name} kon niet worden bijgewerkt. ${error.message}`;
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
        : "Onboarding teruggezet naar Quick Start. Huidige tuningwaarden blijven voorlopig staan.";
      await refreshEntities(["summary"], "state");
      state.appView = action === "apply" ? "overview" : "onboarding";
    } catch (error) {
      state.controlError = `Actie mislukt voor "${entity.name}". ${error.message}`;
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

  function renderFieldList(fields) {
    return fields.map((field) => `
      <article class="oq-helper-field">
        <h3>${escapeHtml(field.title)}</h3>
        <p>${escapeHtml(field.copy)}</p>
      </article>
    `).join("");
  }

  function renderStepTabs() {
    return QUICK_STEPS.map((step, index) => `
      <button
        class="oq-helper-step-tab ${state.currentStep === step.id ? "is-active" : ""}"
        type="button"
        data-oq-action="select-step"
        data-step-id="${escapeHtml(step.id)}"
      >
        <span class="oq-helper-step-index">0${index + 1}</span>
        <span>${escapeHtml(step.title)}</span>
      </button>
    `).join("");
  }

  function renderSelectField(key, title, copy) {
    const entity = state.entities[key] || {};
    const value = String(getEntityValue(key) || "");
    const options = Array.isArray(entity.option) ? entity.option : [];

    return `
      <article class="oq-helper-control-card">
        <div class="oq-helper-control-copy">
          <h3>${escapeHtml(title)}</h3>
          <p>${escapeHtml(copy)}</p>
        </div>
        <label class="oq-helper-control">
          <select class="oq-helper-select" data-oq-field="${escapeHtml(key)}" ${state.loadingEntities ? "disabled" : ""}>
            ${options.map((option) => `<option value="${escapeHtml(option)}" ${option === value ? "selected" : ""}>${escapeHtml(option)}</option>`).join("")}
          </select>
        </label>
      </article>
    `;
  }

  function renderNumberInputField(key, title, copy) {
    const meta = getNumberMeta(key);
    const value = getEntityValue(key);
    return `
      <article class="oq-helper-control-card">
        <div class="oq-helper-control-copy">
          <h3>${escapeHtml(title)}</h3>
          <p>${escapeHtml(copy)}</p>
        </div>
        <label class="oq-helper-control oq-helper-control--split">
          <input
            class="oq-helper-input"
            type="number"
            data-oq-field="${escapeHtml(key)}"
            min="${meta.min}"
            max="${meta.max}"
            step="${meta.step}"
            value="${escapeHtml(value)}"
            ${state.loadingEntities ? "disabled" : ""}
          >
          <span class="oq-helper-unit">${escapeHtml(meta.uom || "")}</span>
        </label>
      </article>
    `;
  }

  function renderSliderField(key, title, copy) {
    const meta = getNumberMeta(key);
    const value = normalizeNumber(key, getEntityValue(key));
    return `
      <article class="oq-helper-control-card">
        <div class="oq-helper-control-copy">
          <h3>${escapeHtml(title)}</h3>
          <p>${escapeHtml(copy)}</p>
        </div>
        <label class="oq-helper-slider-field">
          <div class="oq-helper-slider-meta">
            <span>${escapeHtml(meta.min)}${escapeHtml(meta.uom || "")}</span>
            <strong>${escapeHtml(formatValue(key, value))}</strong>
            <span>${escapeHtml(meta.max)}${escapeHtml(meta.uom || "")}</span>
          </div>
          <input
            class="oq-helper-range"
            type="range"
            data-oq-field="${escapeHtml(key)}"
            min="${meta.min}"
            max="${meta.max}"
            step="${meta.step}"
            value="${value}"
            ${state.loadingEntities ? "disabled" : ""}
          >
        </label>
      </article>
    `;
  }

  function renderPowerHouseWorkspace() {
    return `
      <section class="oq-helper-mode-panel">
        <div class="oq-helper-mode-head">
          <p class="oq-helper-label">Verplicht Voor Power House</p>
          <p class="oq-helper-section-copy">Deze twee waarden bepalen het huisverliesmodel. Ze horen als expliciete onboarding-inputs zichtbaar te zijn, niet verstopt in advanced tuning.</p>
        </div>
        <div class="oq-helper-control-grid">
          ${renderNumberInputField("housePower", "Rated maximum house power", "Verwachte piekwarmtevraag van de woning op het koude referentiepunt.")}
          ${renderNumberInputField("houseOutdoorMax", "Maximum heating outdoor temperature", "Buitentemperatuur waarbij de warmtevraag praktisch naar nul gaat.")}
        </div>
      </section>
    `;
  }

  function renderCurveGraph() {
    const width = 560;
    const height = 240;
    const margin = { top: 22, right: 18, bottom: 38, left: 34 };
    const plotWidth = width - margin.left - margin.right;
    const plotHeight = height - margin.top - margin.bottom;
    const xMin = CURVE_POINTS[0].outdoor;
    const xMax = CURVE_POINTS[CURVE_POINTS.length - 1].outdoor;

    const toX = (temp) => margin.left + ((temp - xMin) / (xMax - xMin)) * plotWidth;
    const toY = (value) => margin.top + ((70 - value) / 50) * plotHeight;

    const gridLines = [20, 30, 40, 50, 60, 70]
      .map((value) => {
        const y = toY(value);
        return `
          <line x1="${margin.left}" y1="${y}" x2="${width - margin.right}" y2="${y}" class="oq-helper-curve-grid" />
          <text x="8" y="${y + 4}" class="oq-helper-curve-axis-label">${value}°</text>
        `;
      })
      .join("");

    const xLabels = CURVE_POINTS
      .map((point) => `
        <text x="${toX(point.outdoor)}" y="${height - 12}" text-anchor="middle" class="oq-helper-curve-axis-label">${escapeHtml(point.label)}</text>
      `)
      .join("");

    const linePoints = CURVE_POINTS
      .map((point) => `${toX(point.outdoor)},${toY(normalizeNumber(point.key, getEntityValue(point.key)))}`)
      .join(" ");

    const circles = CURVE_POINTS
      .map((point) => {
        const value = normalizeNumber(point.key, getEntityValue(point.key));
        return `
          <g>
            <circle
              cx="${toX(point.outdoor)}"
              cy="${toY(value)}"
              r="7"
              class="oq-helper-curve-point ${state.draggingCurveKey === point.key ? "is-dragging" : ""}"
              data-curve-key="${escapeHtml(point.key)}"
            />
            <text x="${toX(point.outdoor)}" y="${toY(value) - 14}" text-anchor="middle" class="oq-helper-curve-point-label">${value.toFixed(1)}°</text>
          </g>
        `;
      })
      .join("");

    return `
      <div class="oq-helper-curve-shell">
        <div class="oq-helper-curve-copy">
          <h3>Heating curve editor</h3>
          <p>Versleep de punten om de zes vereiste Tsupply-doelen in te stellen. De app moet hier begeleiden, in plaats van zes losse technische velden zonder context te tonen.</p>
        </div>
        <svg class="oq-helper-curve-svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="Heating curve editor">
          ${gridLines}
          <polyline points="${linePoints}" class="oq-helper-curve-line" />
          ${circles}
          ${xLabels}
        </svg>
      </div>
    `;
  }

  function renderCurveInputs() {
    return `
      <div class="oq-helper-curve-grid">
        ${CURVE_POINTS.map((point) => renderNumberInputField(point.key, `Curve Tsupply @ ${point.label}`, `Supply target bij ${point.label} buitentemperatuur.`)).join("")}
      </div>
    `;
  }

  function renderCurveWorkspace() {
    return `
      <section class="oq-helper-mode-panel">
        <div class="oq-helper-mode-head">
          <p class="oq-helper-label">Verplicht Voor Heating Curve</p>
          <p class="oq-helper-section-copy">Deze zes curvepunten zijn kerninput voor heating-curve mode. De interactieve grafiek is de juiste plek om dit begrijpelijk te maken.</p>
        </div>
        ${renderCurveGraph()}
        ${renderCurveInputs()}
      </section>
    `;
  }

  function renderStrategyWorkspace() {
    return `
      <section class="oq-helper-panel">
        <p class="oq-helper-label">Stap 1</p>
        <h2 class="oq-helper-section-title">Kies de verwarmingsstrategie</h2>
        <p class="oq-helper-section-copy">Dit is het belangrijkste keuzepunt. Zodra de gebruiker een strategie kiest, moet de onboarding alleen de relevante verplichte inputs tonen.</p>
        <div class="oq-helper-fields oq-helper-fields--spaced">
          ${renderSelectField("strategy", "Verwarmingsstrategie", "Power House vraagt om huis-modelinputs. Heating Curve vraagt om de zes Tsupply-curvepunten.")}
        </div>
        ${isCurveMode() ? renderCurveWorkspace() : renderPowerHouseWorkspace()}
      </section>
    `;
  }

  function renderBehaviorWorkspace() {
    return `
      <section class="oq-helper-panel">
        <p class="oq-helper-label">Stap 2</p>
        <h2 class="oq-helper-section-title">Stem het responsprofiel af</h2>
        <p class="oq-helper-section-copy">Dit blijft een begrijpelijke app-laag boven de technische strategie-instellingen.</p>
        <div class="oq-helper-control-grid">
          ${renderSelectField("behavior", "Gedrag", "Gebruiksvriendelijk label dat mapped naar het actieve strategieprofiel.")}
          ${renderSelectField("preset", "Preset", "Snel gegroepeerd startpunt voor de gebruikelijke compressorlimieten.")}
        </div>
      </section>
    `;
  }

  function renderLimitsWorkspace() {
    return `
      <section class="oq-helper-panel">
        <p class="oq-helper-label">Stap 3</p>
        <h2 class="oq-helper-section-title">Stel de bedrijfsgrenzen in</h2>
        <p class="oq-helper-section-copy">Deze instellingen zijn nog goed uitlegbaar voor gewone gebruikers en horen in de guided setup-flow.</p>
        <div class="oq-helper-control-grid">
          ${renderSliderField("dayMax", "Dag max", "Maximaal compressorniveau tijdens normaal dagbedrijf.")}
          ${renderSliderField("silentMax", "Silent max", "Maximaal compressorniveau tijdens het silent-venster.")}
          ${renderSliderField("maxWater", "Max watertemperatuur", "Bovengrens voor de aanvoertemperatuur.")}
        </div>
      </section>
    `;
  }

  function renderConfirmWorkspace() {
    return `
      <section class="oq-helper-panel">
        <p class="oq-helper-label">Stap 4</p>
        <h2 class="oq-helper-section-title">Bevestigen en afronden</h2>
        <p class="oq-helper-section-copy">De app gebruikt dit als laatste bevestigingsstap, terwijl de firmware alleen de echte instellingen en een kleine onboarding-flag bewaart.</p>
        <div class="oq-helper-fields oq-helper-fields--spaced">
          ${renderFieldList((QUICK_STEPS.find((step) => step.id === "confirm") || QUICK_STEPS[3]).fields)}
        </div>
      </section>
    `;
  }

  function renderActiveStep() {
    if (state.currentStep === "behavior") {
      return renderBehaviorWorkspace();
    }
    if (state.currentStep === "limits") {
      return renderLimitsWorkspace();
    }
    if (state.currentStep === "confirm") {
      return renderConfirmWorkspace();
    }
    return renderStrategyWorkspace();
  }

  function renderStepOverview() {
    return QUICK_STEPS.map((step, index) => `
      <article class="oq-helper-field">
        <h3>0${index + 1}. ${escapeHtml(step.title)}</h3>
        <p>${escapeHtml(step.copy)}</p>
      </article>
    `).join("");
  }

  function renderAppSummary() {
    const parts = [];
    parts.push(isCurveMode() ? "Heating Curve" : "Power House");

    const behavior = String(getEntityValue("behavior") || "").trim();
    if (behavior) {
      parts.push(`gedrag ${behavior}`);
    }

    const preset = String(getEntityValue("preset") || "").trim();
    if (preset) {
      parts.push(`preset ${preset}`);
    }

    if (hasEntity("dayMax")) {
      parts.push(`dag ${formatValue("dayMax")}`);
    }
    if (hasEntity("silentMax")) {
      parts.push(`silent ${formatValue("silentMax")}`);
    }
    if (hasEntity("maxWater")) {
      parts.push(`max water ${formatValue("maxWater")}`);
    }

    return parts.filter(Boolean).join(", ") || state.summary;
  }

  function hasEntity(key) {
    const entity = state.entities[key];
    return Boolean(entity && (entity.state !== undefined || entity.value !== undefined));
  }

  function getEntityStateText(key, fallback = "—") {
    const entity = state.entities[key];
    if (!entity) {
      return fallback;
    }
    if (typeof entity.state === "string" && entity.state.trim() !== "") {
      return entity.state;
    }
    const value = entity.value ?? entity.state;
    if (value === undefined || value === null || value === "") {
      return fallback;
    }
    if (typeof value === "boolean") {
      return value ? "Aan" : "Uit";
    }
    if (typeof value === "number" && !Number.isNaN(value)) {
      return entity.uom ? `${value} ${entity.uom}` : String(value);
    }
    return String(value);
  }

  function getEntityNumericValue(key) {
    const value = Number(getEntityValue(key));
    return Number.isNaN(value) ? NaN : value;
  }

  function isEntityActive(key) {
    const entity = state.entities[key];
    if (!entity) {
      return false;
    }
    if (typeof entity.value === "boolean") {
      return entity.value;
    }
    const raw = String(entity.state ?? entity.value ?? "").toLowerCase();
    return raw === "on" || raw === "true" || raw === "1";
  }

  function renderAppNav() {
    return `
      <div class="oq-helper-app-nav">
        ${APP_VIEWS.map((view) => `
          <button
            class="oq-helper-app-tab ${state.appView === view.id ? "is-active" : ""}"
            type="button"
            data-oq-action="select-view"
            data-view-id="${escapeHtml(view.id)}"
          >
            ${escapeHtml(view.label)}
          </button>
        `).join("")}
      </div>
    `;
  }

  function renderOverviewStatCard(key, label, tone, note) {
    return `
      <article class="oq-overview-stat oq-overview-stat--${escapeHtml(tone)}">
        <p>${escapeHtml(label)}</p>
        <strong>${escapeHtml(getEntityStateText(key))}</strong>
        <span>${escapeHtml(note)}</span>
      </article>
    `;
  }

  function renderOverviewStatusChip(label, value, tone = "neutral") {
    return `<span class="oq-overview-chip oq-overview-chip--${escapeHtml(tone)}"><strong>${escapeHtml(label)}:</strong> ${escapeHtml(value)}</span>`;
  }

  function renderTempRow(label, key, explicitValue = "") {
    return `
      <div class="oq-overview-row">
        <span>${escapeHtml(label)}</span>
        <strong>${escapeHtml(explicitValue || getEntityStateText(key))}</strong>
      </div>
    `;
  }

  function formatSignedTemperature(value) {
    if (Number.isNaN(value)) {
      return "—";
    }
    return `${value > 0 ? "+" : ""}${value.toFixed(1)} °C`;
  }

  function formatWorkingMode(value) {
    const raw = String(value || "").trim();
    if (!raw || raw === "Unknown") {
      return "Onbekend";
    }
    if (raw === "Standby") {
      return "Stand-by";
    }
    if (raw === "Heating") {
      return "Verwarmen";
    }
    if (raw === "Cooling") {
      return "Koelen";
    }
    return raw;
  }

  function formatFailures(value) {
    const raw = String(value || "").trim();
    if (!raw || raw === "None") {
      return "Geen actieve storingen";
    }
    return raw;
  }

  function renderHpSchematicMetric(label, value, tone = "neutral") {
    return `
      <div class="oq-hp-schematic-metric oq-hp-schematic-metric--${escapeHtml(tone)}">
        <span>${escapeHtml(label)}</span>
        <strong>${escapeHtml(value)}</strong>
      </div>
    `;
  }

  function renderHeatPumpSchematic(title, keys, accent, mode, defrostActive, failures, running) {
    const freqValue = getEntityNumericValue(keys.freq);
    const freqText = Number.isNaN(freqValue) ? "—" : String(Math.round(freqValue));
    const powerValue = getEntityNumericValue(keys.power);
    const heatValue = getEntityNumericValue(keys.heat);
    const animated = running || (!Number.isNaN(freqValue) && freqValue > 0) || (!Number.isNaN(powerValue) && powerValue > 80) || (!Number.isNaN(heatValue) && heatValue > 150);
    const statusText = animated ? "Actief" : "Idle";
    const failureText = failures === "Geen actieve storingen" ? "Geen storingen" : failures;
    const waterOutText = getEntityStateText(keys.waterOut);
    const waterInText = getEntityStateText(keys.waterIn);
    const powerText = getEntityStateText(keys.power);
    const heatText = getEntityStateText(keys.heat);
    const copText = getEntityStateText(keys.cop);
    const boardClass = [
      "oq-hp-schematic-board",
      `oq-hp-schematic-board--${accent}`,
      animated ? "is-running" : "",
      defrostActive ? "is-defrost" : "",
    ].filter(Boolean).join(" ");

    return `
      <div class="${escapeHtml(boardClass)}">
        <div class="oq-hp-tech-shell">
          <div class="oq-hp-tech-head">
            <span class="oq-hp-tech-kicker">Buitendeel</span>
            <span class="oq-hp-tech-status">${escapeHtml(statusText)}</span>
          </div>
          <svg class="oq-hp-tech-svg" viewBox="0 0 620 360" role="img" aria-label="${escapeHtml(title)} technische schematic">
            <rect class="oq-hp-tech-frame" x="18" y="28" width="584" height="314" rx="22" />

            <text class="oq-hp-tech-title" x="126" y="74">Condensor</text>
            <text class="oq-hp-tech-title" x="310" y="74">Compressor</text>
            <text class="oq-hp-tech-title" x="394" y="74">4-wegklep</text>
            <text class="oq-hp-tech-title" x="516" y="74">Verdamper</text>

            <text class="oq-hp-tech-water-label" x="34" y="112">Aanvoer</text>
            <text class="oq-hp-tech-water-value" x="34" y="136">${escapeHtml(waterOutText)}</text>
            <text class="oq-hp-tech-water-label" x="34" y="264">Retour</text>
            <text class="oq-hp-tech-water-value" x="34" y="288">${escapeHtml(waterInText)}</text>

            <g class="oq-hp-tech-chip">
              <rect x="246" y="82" width="128" height="34" rx="10" />
              <text class="oq-hp-tech-chip-text" x="310" y="104">${escapeHtml(`${freqText} Hz · ${powerText}`)}</text>
            </g>

            <g class="oq-hp-tech-condensor">
              <rect class="oq-hp-tech-condensor-shell" x="104" y="94" width="58" height="190" rx="16" />
              <path class="oq-hp-tech-condensor-band" d="M118 104 V274" />
            </g>

            <g class="oq-hp-tech-compressor">
              <rect class="oq-hp-tech-compressor-body" x="280" y="132" width="60" height="92" rx="18" />
              <path class="oq-hp-tech-compressor-lines" d="M294 154 H326 M294 170 H326 M294 186 H326" />
            </g>

            <g class="oq-hp-tech-4way">
              <rect class="oq-hp-tech-4way-body" x="388" y="146" width="28" height="44" rx="10" />
              <path class="oq-hp-tech-4way-mark" d="M402 152 V184 M392 168 H412" />
            </g>

            <g class="oq-hp-tech-valve">
              <path class="oq-hp-tech-valve-mark" d="M298 254 L322 278 M322 254 L298 278" />
            </g>

            <g class="oq-hp-tech-evaporator">
              <rect class="oq-hp-tech-evaporator-shell" x="480" y="94" width="56" height="190" rx="16" />
              <path class="oq-hp-tech-evaporator-lines" d="M492 110 H524 M492 122 H524 M492 134 H524 M492 146 H524 M492 158 H524 M492 170 H524 M492 182 H524 M492 194 H524 M492 206 H524 M492 218 H524 M492 230 H524 M492 242 H524 M492 254 H524" />
            </g>

            <g class="oq-hp-tech-fan">
              <circle class="oq-hp-tech-fan-ring" cx="560" cy="188" r="34" />
              <circle class="oq-hp-tech-fan-core" cx="560" cy="188" r="8" />
              <g class="oq-hp-tech-fan-blades">
                <path d="M560 154 C571 168 572 179 560 188 C548 179 549 168 560 154 Z" />
                <path d="M594 188 C579 196 568 197 560 188 C568 179 579 180 594 188 Z" />
                <path d="M560 222 C549 208 548 197 560 188 C572 197 571 208 560 222 Z" />
              </g>
            </g>

            <path class="oq-hp-tech-line oq-hp-tech-line--supply" d="M18 124 H104" />
            <path class="oq-hp-tech-line oq-hp-tech-line--return" d="M18 274 H104" />
            <path class="oq-hp-tech-line oq-hp-tech-line--hotgas" d="M340 168 H388" />
            <path class="oq-hp-tech-line oq-hp-tech-line--hotgas" d="M388 168 H232 Q194 168 162 124" />
            <path class="oq-hp-tech-line oq-hp-tech-line--liquid" d="M162 258 H248 Q284 258 310 266" />
            <path class="oq-hp-tech-line oq-hp-tech-line--expansion" d="M322 266 H480" />
            <path class="oq-hp-tech-line oq-hp-tech-line--suction" d="M480 124 H444 Q418 124 402 146" />
            <path class="oq-hp-tech-line oq-hp-tech-line--suction" d="M402 190 V208 Q402 224 386 224 H340" />

            <path class="oq-hp-tech-flow oq-hp-tech-flow--supply" d="M18 124 H104" />
            <path class="oq-hp-tech-flow oq-hp-tech-flow--return" d="M18 274 H104" />
            <path class="oq-hp-tech-flow oq-hp-tech-flow--hotgas" d="M340 168 H388" />
            <path class="oq-hp-tech-flow oq-hp-tech-flow--hotgas" d="M388 168 H232 Q194 168 162 124" />
            <path class="oq-hp-tech-flow oq-hp-tech-flow--liquid" d="M162 258 H248 Q284 258 310 266" />
            <path class="oq-hp-tech-flow oq-hp-tech-flow--expansion" d="M322 266 H480" />
            <path class="oq-hp-tech-flow oq-hp-tech-flow--suction" d="M480 124 H444 Q418 124 402 146" />
            <path class="oq-hp-tech-flow oq-hp-tech-flow--suction" d="M402 190 V208 Q402 224 386 224 H340" />

            <text class="oq-hp-tech-note" x="170" y="300">Heat out ${escapeHtml(heatText)}</text>
            <text class="oq-hp-tech-note" x="386" y="212">V4</text>
            <text class="oq-hp-tech-note" x="448" y="300">${defrostActive ? "Defrost actief" : "Defrost uit"}</text>
          </svg>
          <div class="oq-hp-tech-footer">
            <div class="oq-hp-tech-footer-item">
              <span>Werkmodus</span>
              <strong>${escapeHtml(mode)}</strong>
            </div>
            <div class="oq-hp-tech-footer-item">
              <span>COP</span>
              <strong>${escapeHtml(copText)}</strong>
            </div>
            <div class="oq-hp-tech-footer-item oq-hp-tech-footer-item--wide">
              <span>Actieve storingen</span>
              <strong>${escapeHtml(failureText)}</strong>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function getHomeDemandState() {
    const roomTemp = getEntityNumericValue("roomTemp");
    const roomSetpoint = getEntityNumericValue("roomSetpoint");
    const delta = roomSetpoint - roomTemp;

    if (Number.isNaN(delta)) {
      return {
        tone: "unknown",
        level: "Onbekend",
        score: 0,
        description: "Nog niet genoeg ruimtegegevens om de warmtevraag betrouwbaar te duiden.",
      };
    }

    if (delta >= 1.0) {
      return {
        tone: "high",
        level: "Hoge warmtevraag",
        score: Math.min(100, Math.round((delta / 2) * 100)),
        description: "De woning zit merkbaar onder setpoint. Het systeem mag nu duidelijk doorverwarmen richting comfort.",
      };
    }

    if (delta >= 0.3) {
      return {
        tone: "active",
        level: "Warmtevraag actief",
        score: Math.min(100, Math.round((delta / 2) * 100)),
        description: "Er is nog warmtevraag, maar minder agressief dan bij een grote achterstand.",
      };
    }

    if (delta >= -0.2) {
      return {
        tone: "steady",
        level: "Bijna op setpoint",
        score: Math.max(8, Math.round(((delta + 0.2) / 0.5) * 35)),
        description: "De woning zit dicht bij setpoint. Het systeem hoeft vooral vast te houden en rustig bij te sturen.",
      };
    }

    return {
      tone: "low",
      level: "Lage warmtevraag",
      score: 6,
      description: "De woning zit boven setpoint. De installatie kan terugmoduleren of afbouwen.",
    };
  }

  function renderHomeDemandCard() {
    const demand = getHomeDemandState();

    return `
      <div class="oq-overview-home-demand">
        <div class="oq-overview-home-badge oq-overview-home-badge--${escapeHtml(demand.tone)}">
          <span>Vraag</span>
          <strong>${escapeHtml(demand.level)}</strong>
        </div>
        <div class="oq-overview-home-copy">
          <h4>Warmtevraag woning</h4>
          <p>${escapeHtml(demand.description)}</p>
          <div class="oq-overview-home-meter">
            <div class="oq-overview-home-meter-track">
              <span class="oq-overview-home-meter-fill oq-overview-home-meter-fill--${escapeHtml(demand.tone)}" style="width:${demand.score}%"></span>
            </div>
            <div class="oq-overview-home-meter-labels">
              <span>laag</span>
              <span>hoog</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function renderHeatPumpPanel(title, keys, accent) {
    if (!hasEntity(keys.power)) {
      return "";
    }
    const mode = formatWorkingMode(getEntityStateText(keys.mode, "Unknown"));
    const defrostActive = isEntityActive(keys.defrost);
    const failures = formatFailures(getEntityStateText(keys.failures, "None"));
    const running = mode === "Verwarmen" || mode === "Koelen" || defrostActive;

    if (state.hpVisualMode === "schematic") {
      return `
        <section class="oq-overview-hp oq-overview-hp--${escapeHtml(accent)}">
          <div class="oq-overview-hp-head">
            <div>
              <p class="oq-helper-label">${escapeHtml(title)}</p>
              <h3>${escapeHtml(title)}</h3>
            </div>
            <span class="oq-overview-chip oq-overview-chip--${running ? "active" : "neutral"}">${running ? "Actief" : "Idle"}</span>
          </div>
          ${renderHeatPumpSchematic(title, keys, accent, mode, defrostActive, failures, running)}
        </section>
      `;
    }

    return `
      <section class="oq-overview-hp oq-overview-hp--${escapeHtml(accent)}">
        <div class="oq-overview-hp-head">
          <div>
            <p class="oq-helper-label">${escapeHtml(title)}</p>
            <h3>${escapeHtml(title)}</h3>
          </div>
          <span class="oq-overview-chip oq-overview-chip--${running ? "active" : "neutral"}">${running ? "Actief" : "Idle"}</span>
        </div>
        <div class="oq-overview-hp-stats">
          ${renderOverviewStatCard(keys.power, "Power in", "blue", "elektrisch ingangsvermogen")}
          ${renderOverviewStatCard(keys.heat, "Heat out", "orange", "thermisch vermogen")}
          ${renderOverviewStatCard(keys.cop, "COP", "green", "actueel")}
        </div>
        <div class="oq-overview-hp-meta">
          <div class="oq-overview-hp-meta-chip">
            <span>Werkmodus</span>
            <strong>${escapeHtml(mode)}</strong>
          </div>
          <div class="oq-overview-hp-meta-chip">
            <span>Comp. freq</span>
            <strong>${escapeHtml(getEntityStateText(keys.freq))}</strong>
          </div>
          <div class="oq-overview-hp-meta-chip">
            <span>Defrost</span>
            <strong>${defrostActive ? "Actief" : "Uit"}</strong>
          </div>
        </div>
        <div class="oq-overview-temps-list">
          ${renderTempRow("Water in", keys.waterIn)}
          ${renderTempRow("Water out", keys.waterOut)}
          ${renderTempRow("Actieve storingen", keys.failures, failures)}
        </div>
      </section>
    `;
  }

  function renderOverviewView() {
    const strategyLabel = isCurveMode() ? "Heating Curve" : "Power House";
    const targetKey = isCurveMode() ? "curveSupplyTarget" : "maxWater";

    return `
      <section class="oq-helper-panel oq-helper-panel--flush">
        <div class="oq-overview-board oq-overview-board--${escapeHtml(state.overviewTheme)}">
          <div class="oq-overview-head">
            <div>
              <p class="oq-helper-label">Overzicht</p>
              <h2 class="oq-helper-section-title">OpenQuatt live overzicht</h2>
              <p class="oq-helper-section-copy">Dit is de richting voor de pagina na onboarding: compacte status bovenaan, het thermische beeld in het midden en de warmtepompen duidelijk als eersteklas onderdeel van het systeem.</p>
            </div>
            <div class="oq-overview-head-actions">
              <button class="oq-helper-button oq-helper-button--ghost oq-overview-theme-toggle" type="button" data-oq-action="toggle-overview-theme">
                ${state.overviewTheme === "light" ? "Gebruik donker overzicht" : "Gebruik licht overzicht"}
              </button>
              <button class="oq-helper-button oq-helper-button--ghost oq-overview-theme-toggle" type="button" data-oq-action="toggle-hp-visual">
                ${state.hpVisualMode === "schematic" ? "Gebruik compacte HP-kaarten" : "Gebruik schematische HP-weergave"}
              </button>
              <div class="oq-overview-status">
                ${renderOverviewStatusChip("Strategie", strategyLabel, "blue")}
                ${renderOverviewStatusChip("Control mode", getEntityStateText("controlModeLabel"), "neutral")}
                ${renderOverviewStatusChip("Flow mode", getEntityStateText("flowMode"), "neutral")}
                ${renderOverviewStatusChip("Silent", isEntityActive("silentActive") ? "Actief" : "Uit", isEntityActive("silentActive") ? "active" : "neutral")}
                ${renderOverviewStatusChip("Sticky pump", isEntityActive("stickyActive") ? "Actief" : "Uit", isEntityActive("stickyActive") ? "active" : "neutral")}
              </div>
            </div>
          </div>
          <div class="oq-overview-top">
            ${renderOverviewStatCard("totalPower", "Power in", "blue", "systeem totaal")}
            ${renderOverviewStatCard("totalHeat", "Heat out", "orange", "thermisch vermogen")}
            ${renderOverviewStatCard("totalCop", "COP", "green", "systeemefficiency")}
            ${renderOverviewStatCard("flowSelected", "Flow", "sky", "pomp + distributie")}
          </div>
          <div class="oq-overview-main">
            <section class="oq-overview-system">
              <div class="oq-overview-system-copy">
                <h3>Warmtevraag</h3>
                <p>Afgeleide indicatie van hoeveel warmte de woning nu vraagt.</p>
              </div>
              ${renderHomeDemandCard()}
            </section>
            <section class="oq-overview-temps">
              <div class="oq-overview-system-copy">
                <h3>Temperaturen</h3>
                <p>Belangrijkste temperatuurwaarden voor comfort en regeling.</p>
              </div>
              <div class="oq-overview-temps-list">
                ${renderTempRow("Kamertemperatuur", "roomTemp")}
                ${renderTempRow("Kamer setpoint", "roomSetpoint")}
                ${renderTempRow("Aanvoertemperatuur", "supplyTemp")}
                ${renderTempRow(isCurveMode() ? "Curve target" : "Max watertemperatuur", targetKey)}
              </div>
            </section>
          </div>
          <div class="oq-overview-hp-grid">
            ${renderHeatPumpPanel("HP1", {
              power: "hp1Power",
              heat: "hp1Heat",
              cop: "hp1Cop",
              freq: "hp1Freq",
              waterIn: "hp1WaterIn",
              waterOut: "hp1WaterOut",
              mode: "hp1Mode",
              failures: "hp1Failures",
              defrost: "hp1Defrost",
            }, "blue")}
            ${renderHeatPumpPanel("HP2", {
              power: "hp2Power",
              heat: "hp2Heat",
              cop: "hp2Cop",
              freq: "hp2Freq",
              waterIn: "hp2WaterIn",
              waterOut: "hp2WaterOut",
              mode: "hp2Mode",
              failures: "hp2Failures",
              defrost: "hp2Defrost",
            }, "orange")}
          </div>
        </div>
      </section>
    `;
  }

  function renderSettingsView() {
    return `
      <section class="oq-helper-panel">
        <p class="oq-helper-label">Instellingen</p>
        <h2 class="oq-helper-section-title">Duidelijke instellingen met uitleg</h2>
        <p class="oq-helper-section-copy">Dit is de route-1 richting voor instellingen: de app bepaalt uitleg, structuur en groepering, terwijl hij direct naar de canonieke OpenQuatt-entities schrijft.</p>
        <div class="oq-helper-settings-stack">
          <section class="oq-helper-mode-panel">
            <div class="oq-helper-mode-head">
              <p class="oq-helper-label">Verwarming</p>
              <p class="oq-helper-section-copy">De bovenste laag voor de dagelijkse regelkeuzes.</p>
            </div>
            <div class="oq-helper-control-grid">
              ${renderSelectField("strategy", "Verwarmingsstrategie", "Hoofdmodel voor het gedrag van het device.")}
              ${renderSelectField("behavior", "Gedrag", "Begrijpelijk responslabel dat mapped naar de actieve strategie.")}
              ${renderSelectField("preset", "Preset", "Snel gegroepeerd startprofiel voor de gebruikelijke limieten.")}
            </div>
          </section>
          <section class="oq-helper-mode-panel">
            <div class="oq-helper-mode-head">
              <p class="oq-helper-label">Grenzen</p>
              <p class="oq-helper-section-copy">Praktische grenzen die nog steeds duidelijk in de hoofdinstellingen horen.</p>
            </div>
            <div class="oq-helper-control-grid">
              ${renderSliderField("dayMax", "Dag max", "Maximaal compressorniveau tijdens dagbedrijf.")}
              ${renderSliderField("silentMax", "Silent max", "Maximaal compressorniveau tijdens silent-bedrijf.")}
              ${renderSliderField("maxWater", "Max watertemperatuur", "Bovengrens voor de watertemperatuur.")}
            </div>
          </section>
          ${isCurveMode() ? renderCurveWorkspace() : renderPowerHouseWorkspace()}
          <section class="oq-helper-panel oq-helper-panel--advanced">
            <div class="oq-helper-advanced-head">
              <div>
                <p class="oq-helper-label">Advanced instellingen</p>
                <p class="oq-helper-advanced-copy">We bepalen nog wat hier echt thuishoort, maar de structuur kan nu al veel duidelijker zijn dan de ruwe ESPHome-lijst.</p>
              </div>
              <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="toggle-advanced">
                ${state.advancedOpen ? "Verberg advanced-kandidaten" : "Toon advanced-kandidaten"}
              </button>
            </div>
            ${renderAdvancedList()}
          </section>
        </div>
      </section>
    `;
  }

  function renderAdvancedList() {
    if (!state.advancedOpen) {
      return "";
    }

    const groups = ADVANCED_GROUPS
      .map((group) => `
        <article class="oq-helper-advanced-group">
          <h3>${escapeHtml(group.title)}</h3>
          <p>${escapeHtml(group.copy)}</p>
          <ul>${group.fields.map((name) => `<li>${escapeHtml(name)}</li>`).join("")}</ul>
        </article>
      `)
      .join("");

    return `
      <div class="oq-helper-advanced">
        <p>Dit zijn de huidige technische kandidaten voor de latere advanced-weergave. Voor nu blijven ze in de native entitylijst hieronder, zodat het testpad stabiel blijft terwijl we structuur en wording aanscherpen.</p>
        <div class="oq-helper-advanced-grid">${groups}</div>
      </div>
    `;
  }

  function renderNativeFallbackPanel() {
    return `
      <section class="oq-helper-panel oq-helper-native-panel">
        <div class="oq-helper-native-head">
          <div>
            <p class="oq-helper-label">ESPHome Fallback</p>
            <h2 class="oq-helper-section-title">Technische fallback blijft beschikbaar, maar uit beeld</h2>
            <p class="oq-helper-section-copy">De custom OpenQuatt-app hoort de primaire ervaring te zijn. De ruwe ESPHome-UI blijft hier beschikbaar als debug- en uitwijklaag, standaard verborgen zodat hij niet meer concurreert met de hoofdinterface.</p>
          </div>
          <div class="oq-helper-actions oq-helper-actions--compact">
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="toggle-native">
              ${state.nativeOpen ? "Verberg ESPHome fallback" : "Toon ESPHome fallback"}
            </button>
            <button class="oq-helper-button" type="button" data-oq-action="jump-native">
              ${state.nativeOpen ? "Ga naar fallback" : "Open en ga naar fallback"}
            </button>
          </div>
        </div>
        <p class="oq-helper-native-state">
          <strong>${state.nativeOpen ? "Nu zichtbaar." : "Standaard verborgen."}</strong>
          ${state.nativeOpen ? " Gebruik dit voor ruwe entities, diagnose en tijdelijke gaten terwijl het OpenQuatt-appoppervlak verder groeit." : " Zo blijven onboarding, overzicht en instellingen visueel primair, terwijl de native fallback eronder behouden blijft."}
        </p>
      </section>
    `;
  }

  function render() {
    if (!state.root) {
      return;
    }

    const mainContent = state.appView === "overview"
      ? renderOverviewView()
      : state.appView === "settings"
        ? renderSettingsView()
        : `
          <div class="oq-helper-step-tabs">
            ${renderStepTabs()}
          </div>
          <div class="oq-helper-grid">
            ${renderActiveStep()}
            <section class="oq-helper-panel">
              <p class="oq-helper-label">Live samenvatting</p>
              <div class="oq-helper-status">
                <span class="oq-helper-chip">
                  <strong>Fase:</strong> ${escapeHtml(state.stage)}
                </span>
                <span class="oq-helper-chip">
                  <strong>Status:</strong> ${state.complete ? "Gereed" : "Bezig"}
                </span>
                <span class="oq-helper-chip">
                  <strong>Mode:</strong> ${escapeHtml(isCurveMode() ? "Heating Curve" : "Power House")}
                </span>
              </div>
              <div class="oq-helper-summary">${escapeHtml(renderAppSummary())}</div>
              ${state.controlNotice ? `<p class="oq-helper-notice">${escapeHtml(state.controlNotice)}</p>` : ""}
              ${state.controlError ? `<p class="oq-helper-error">${escapeHtml(state.controlError)}</p>` : ""}
              <div class="oq-helper-actions">
                <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="apply" ${state.busyAction ? "disabled" : ""}>
                  ${state.busyAction === "apply" ? "Toepassen..." : "Toepassen en afronden"}
                </button>
                <button class="oq-helper-button" type="button" data-oq-action="reset" ${state.busyAction ? "disabled" : ""}>
                  ${state.busyAction === "reset" ? "Resetten..." : "Opnieuw beginnen"}
                </button>
                <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="jump-native">
                  Naar technische fallback
                </button>
              </div>
            </section>
            <section class="oq-helper-panel">
              <p class="oq-helper-label">Stapoverzicht</p>
              <div class="oq-helper-fields">
                ${renderStepOverview()}
              </div>
            </section>
          </div>
        `;

    const contentWithFallback = `${mainContent}${renderNativeFallbackPanel()}`;

    state.root.innerHTML = `
      <div class="oq-helper-shell">
        <div class="oq-helper-card">
          <div class="oq-helper-head">
            <div class="oq-helper-brand">
              <div class="oq-helper-logo-lockup">
                ${LOGO_MARKUP}
                <div class="oq-helper-brand-copy">
                  <p class="oq-helper-kicker">OpenQuatt app preview</p>
                  <h1>OpenQuatt app-voorbeeld</h1>
                </div>
              </div>
              <p class="oq-helper-lead">Nieuwe gebruikers starten met onboarding. Daarna hoort het device te landen op een strak OpenQuatt-overzicht met control mode, flow, temperaturen en de warmtepompen duidelijk in beeld. Instellingen moeten gestructureerd, uitlegbaar en aanpasbaar blijven.</p>
            </div>
            <button class="oq-helper-toggle" type="button" data-oq-action="toggle-helper">
              ${state.helperOpen ? "Helper inklappen" : "Helper uitklappen"}
            </button>
          </div>
          ${state.helperOpen ? `
            ${renderAppNav()}
            ${contentWithFallback}
          ` : ""}
        </div>
      </div>
    `;
    syncNativeVisibility();
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll("\"", "&quot;")
      .replaceAll("'", "&#39;");
  }

  boot();
}());
