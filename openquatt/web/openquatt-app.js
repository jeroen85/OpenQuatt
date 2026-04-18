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
  const SETTINGS_KEYS = [
    "strategy",
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

  function formatDeviceUptime() {
    return formatUptimeFromMeta();
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

  function getFirmwareSummary() {
    return String((getFirmwareUpdateEntity() || {}).summary || "").trim();
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
    const midLeft = CURVE_POINTS[Math.floor(CURVE_POINTS.length / 2) - 1];
    const midRight = CURVE_POINTS[Math.floor(CURVE_POINTS.length / 2)];
    if (!midLeft || !midRight || !hasEntity("curveFallbackSupply")) {
      return null;
    }

    const leftValue = normalizeNumber(midLeft.key, getEntityValue(midLeft.key));
    const rightValue = normalizeNumber(midRight.key, getEntityValue(midRight.key));
    const suggestionValue = normalizeNumber("curveFallbackSupply", (leftValue + rightValue) / 2);

    return {
      value: suggestionValue,
      label: formatValue("curveFallbackSupply", suggestionValue),
      basis: `Afgeleid uit het midden van je stooklijn (${midLeft.label} en ${midRight.label}).`,
      isCurrent: normalizeNumber("curveFallbackSupply", getEntityValue("curveFallbackSupply")) === suggestionValue,
    };
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
    }
  }

  function handleClick(event) {
    const timeControl = event.target.closest(".oq-settings-control--time");
    if (timeControl) {
      const timeInput = timeControl.querySelector('input[data-oq-field]');
      if (timeInput && timeInput.type === "time" && typeof timeInput.showPicker === "function") {
        try {
          timeInput.showPicker();
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
        await refreshEntities(["setupComplete", "strategy", ...FLOW_SETTING_KEYS, ...LIMIT_KEYS], "state");
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

  function renderFieldList(fields) {
    return fields.map((field) => `
      <article class="oq-helper-field">
        <h3>${escapeHtml(field.title)}</h3>
        <p>${escapeHtml(field.copy)}</p>
      </article>
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

  function renderNumberInputField(key, title, copy, options = {}) {
    const meta = getNumberMeta(key);
    const value = getInputDraftValue(key);
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
        ${options.footerMarkup || ""}
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

  function renderSettingsInfoToggle(infoId, title, copy) {
    if (!copy) {
      return "";
    }

    return `
      <div class="oq-settings-info${state.settingsInfoOpen === infoId ? " is-open" : ""}" data-oq-settings-info="${escapeHtml(infoId)}">
        <button
          class="oq-settings-info-button"
          type="button"
          data-oq-action="toggle-settings-info"
          data-info-id="${escapeHtml(infoId)}"
          aria-label="${escapeHtml(`Uitleg bij ${title}`)}"
          aria-expanded="${state.settingsInfoOpen === infoId ? "true" : "false"}"
        >i</button>
        <div class="oq-settings-info-popover" ${state.settingsInfoOpen === infoId ? "" : "hidden"}>
          <p>${escapeHtml(copy)}</p>
        </div>
      </div>
    `;
  }

  function renderSettingsFieldCard(fieldKey, title, copy, controlMarkup, className = "", footerMarkup = "") {
    return `
      <article class="oq-settings-field${className ? ` ${className}` : ""}">
        <div class="oq-settings-field-head">
          <h3>${escapeHtml(title)}</h3>
          ${renderSettingsInfoToggle(fieldKey, title, copy)}
        </div>
        <div class="oq-settings-field-control">
          ${controlMarkup}
        </div>
        ${footerMarkup}
      </article>
    `;
  }

  function renderSettingsStaticField(fieldKey, title, copy, value, className = "") {
    return renderSettingsFieldCard(
      fieldKey,
      title,
      copy,
      `<div class="oq-settings-static-value">${escapeHtml(value)}</div>`,
      className,
    );
  }

  function formatSettingsOptionLabel(option) {
    const value = String(option || "").trim();
    if (!value) {
      return "";
    }

    const labels = {
      None: "Geen",
      Manual: "Handmatig",
      Balanced: "Gebalanceerd",
      Stable: "Stabiel",
      Responsive: "Direct",
      Calm: "Rustig",
      Custom: "Aangepast",
      [STRATEGY_OPTION_CURVE]: "Stooklijn",
      [STRATEGY_OPTION_POWER_HOUSE]: "Power House",
      "Dew point required": "Dauwpunt verplicht",
      "Allow without dew point": "Toestaan zonder dauwpunt",
    };

    return labels[value] || value;
  }

  function renderSettingsSelectField(key, title, copy, className = "") {
    if (!hasEntity(key)) {
      return "";
    }

    const entity = state.entities[key] || {};
    const value = String(getEntityValue(key) || "");
    const options = Array.isArray(entity.option) ? entity.option : [];
    const controlMarkup = `
      <label class="oq-settings-control oq-settings-control--select">
        <select class="oq-helper-select" data-oq-field="${escapeHtml(key)}" ${state.loadingEntities ? "disabled" : ""}>
          ${options.map((option) => `<option value="${escapeHtml(option)}" ${option === value ? "selected" : ""}>${escapeHtml(formatSettingsOptionLabel(option))}</option>`).join("")}
        </select>
        <span class="oq-settings-select-caret" aria-hidden="true"></span>
      </label>
    `;

    return renderSettingsFieldCard(key, title, copy, controlMarkup, className);
  }

  function renderSettingsOptionCardsField(key, title, copy, descriptions, className = "") {
    if (!hasEntity(key)) {
      return "";
    }

    const entity = state.entities[key] || {};
    const currentValue = String(getEntityValue(key) || "");
    const options = Array.isArray(entity.option) ? entity.option : [];
    const busy = state.loadingEntities || state.busyAction === `save-${key}`;
    const controlMarkup = `
      <div class="oq-settings-choice-grid">
        ${options.map((option) => {
          const optionCopy = descriptions[option] || "";
          return `
            <button
              class="oq-settings-choice-card${option === currentValue ? " is-active" : ""}"
              type="button"
              data-oq-action="select-settings-option"
              data-select-key="${escapeHtml(key)}"
              data-select-option="${escapeHtml(option)}"
              aria-pressed="${option === currentValue ? "true" : "false"}"
              ${busy ? "disabled" : ""}
            >
              <span class="oq-settings-choice-title">${escapeHtml(formatSettingsOptionLabel(option))}</span>
              ${optionCopy ? `<span class="oq-settings-choice-copy">${escapeHtml(optionCopy)}</span>` : ""}
            </button>
          `;
        }).join("")}
      </div>
    `;

    return renderSettingsFieldCard(key, title, copy, controlMarkup, className);
  }

  function renderSettingsNumberField(key, title, copy, className = "", options = {}) {
    if (!hasEntity(key)) {
      return "";
    }

    const meta = getNumberMeta(key);
    const value = getInputDraftValue(key);
    const unit = options.unitOverride || meta.uom || "";
    const showUnit = options.showUnit !== false && Boolean(unit);
    const useInlineUnit = showUnit && options.unitMode !== "outside";
    const controlMarkup = `
      <label class="oq-helper-control${showUnit && !useInlineUnit ? " oq-helper-control--split" : ""}${useInlineUnit ? " oq-helper-control--suffix" : ""}">
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
        ${showUnit
          ? useInlineUnit
            ? `<span class="oq-helper-unit-chip">${escapeHtml(unit)}</span>`
            : `<span class="oq-helper-unit">${escapeHtml(unit)}</span>`
          : ""}
      </label>
    `;

    return renderSettingsFieldCard(key, title, copy, controlMarkup, className, options.footerMarkup || "");
  }

  function renderSettingsSliderField(key, title, copy, className = "") {
    if (!hasEntity(key)) {
      return "";
    }

    const meta = getNumberMeta(key);
    const value = normalizeNumber(key, getEntityValue(key));
    const controlMarkup = `
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
    `;

    return renderSettingsFieldCard(key, title, copy, controlMarkup, className);
  }

  function renderSettingsMiniNumberField(key, title, copy, options = {}) {
    if (!hasEntity(key)) {
      return "";
    }

    const meta = getNumberMeta(key);
    const value = getInputDraftValue(key);
    const compact = options.compact === true;
    const embedded = options.embedded === true;
    const infoId = options.infoId || key;
    const showCopy = options.showCopy !== false;
    return `
      <article class="oq-settings-mini-field${compact ? " oq-settings-mini-field--compact" : ""}${embedded ? " oq-settings-mini-field--embedded" : ""}">
        <div class="oq-settings-mini-copy">
          <div class="oq-settings-mini-copy-head">
            <h5>${escapeHtml(title)}</h5>
            ${copy ? renderSettingsInfoToggle(infoId, title, copy) : ""}
          </div>
          ${copy && showCopy ? `<p>${escapeHtml(copy)}</p>` : ""}
        </div>
        <label class="oq-helper-control oq-helper-control--suffix">
          <input
            class="oq-helper-input oq-helper-input--compact-number"
            type="number"
            data-oq-field="${escapeHtml(key)}"
            min="${meta.min}"
            max="${meta.max}"
            step="${meta.step}"
            value="${escapeHtml(value)}"
            ${state.loadingEntities ? "disabled" : ""}
          >
          ${meta.uom ? `<span class="oq-helper-unit-chip">${escapeHtml(meta.uom)}</span>` : ""}
        </label>
      </article>
    `;
  }

  function renderSettingsTimeField(key, title, copy, className = "") {
    if (!hasEntity(key)) {
      return "";
    }

    const value = toTimeInputValue(getEntityValue(key));
    const controlMarkup = `
      <label class="oq-settings-control oq-settings-control--time">
        <input
          class="oq-helper-input oq-helper-input--time"
          type="time"
          step="60"
          lang="nl-NL"
          inputmode="numeric"
          data-oq-field="${escapeHtml(key)}"
          value="${escapeHtml(value)}"
          ${state.loadingEntities ? "disabled" : ""}
        >
        <span class="oq-settings-time-icon" aria-hidden="true">
          <svg viewBox="0 0 20 20" focusable="false">
            <circle cx="10" cy="10" r="6.5" fill="none" stroke="currentColor" stroke-width="1.6" />
            <path d="M10 6.2 V10 L12.9 11.8" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </span>
      </label>
    `;

    return renderSettingsFieldCard(key, title, copy, controlMarkup, className || "oq-settings-field--time");
  }

  function renderSettingsSection(kicker, title, copy, body) {
    return `
      <section class="oq-settings-section">
        <div class="oq-settings-section-head">
          <p class="oq-helper-label">${escapeHtml(kicker)}</p>
          <h3>${escapeHtml(title)}</h3>
          <p>${escapeHtml(copy)}</p>
        </div>
        ${body}
      </section>
    `;
  }

  function renderSettingsCurveInputs() {
    const suggestion = getCurveFallbackSuggestion();
    const suggestionMarkup = suggestion ? `
      <div class="oq-curve-fallback-suggest oq-curve-fallback-suggest--inside">
        <div class="oq-curve-fallback-suggest-copy">
          <strong>Suggestie: ${escapeHtml(suggestion.label)}</strong>
          <span>${escapeHtml(suggestion.basis)}</span>
        </div>
        <button
          class="oq-helper-button oq-helper-button--ghost"
          type="button"
          data-oq-action="suggest-curve-fallback"
          ${state.loadingEntities || state.busyAction === "save-curveFallbackSupply" || suggestion.isCurrent ? "disabled" : ""}
        >
          ${suggestion.isCurrent ? "Actief" : "Gebruik suggestie"}
        </button>
      </div>
    ` : "";
    return `
      <div class="oq-settings-curve-grid">
        ${CURVE_POINTS.map((point) => renderSettingsNumberField(point.key, `Aanvoertemp. bij ${point.label}`, `Doelaanvoertemperatuur bij ${point.label} buitentemperatuur.`)).join("")}
        ${renderSettingsNumberField("curveFallbackSupply", "Fallback-aanvoertemperatuur zonder buitentemperatuur", "Aanvoertemperatuur die gebruikt wordt als de buitentemperatuursensor niet beschikbaar is.", "oq-settings-field--curve-fallback-card", { footerMarkup: suggestionMarkup })}
      </div>
    `;
  }

  function renderHeatingStrategyExplainCards() {
    const curveActive = isCurveMode();
    return `
      <div class="oq-settings-strategy-grid">
        <button
          class="oq-settings-strategy-card${curveActive ? "" : " is-active"}"
          type="button"
          data-oq-action="select-settings-option"
          data-select-key="strategy"
          data-select-option="${escapeHtml(STRATEGY_OPTION_POWER_HOUSE)}"
          aria-pressed="${curveActive ? "false" : "true"}"
          ${state.loadingEntities || state.busyAction === "save-strategy" ? "disabled" : ""}
        >
          <p class="oq-helper-label">Power House</p>
          <h4>Automatisch op basis van je woning</h4>
          <p>Power House schat hoeveel warmte je woning nodig heeft. Dit is meestal de beste keuze als je zonder veel finetuning wilt starten.</p>
          <ul class="oq-settings-strategy-points">
            <li>Gebruikt vooral het geschatte warmteverlies van je woning en de buitentemperatuur waarbij verwarmen meestal niet meer nodig is.</li>
            <li>Reageert meer op het gedrag van je woning dan op een vaste temperatuurcurve.</li>
            <li>Handig als je vooral comfort wilt en zo min mogelijk handmatig wilt instellen.</li>
          </ul>
        </button>
        <button
          class="oq-settings-strategy-card${curveActive ? " is-active" : ""}"
          type="button"
          data-oq-action="select-settings-option"
          data-select-key="strategy"
          data-select-option="${escapeHtml(STRATEGY_OPTION_CURVE)}"
          aria-pressed="${curveActive ? "true" : "false"}"
          ${state.loadingEntities || state.busyAction === "save-strategy" ? "disabled" : ""}
        >
          <p class="oq-helper-label">Stooklijn</p>
          <h4>Regelen met een stooklijn</h4>
          <p>Met een stooklijn kies je per buitentemperatuur welke aanvoertemperatuur nodig is. Handig als je dit bewust zelf wilt instellen.</p>
          <ul class="oq-settings-strategy-points">
            <li>Gebruikt de curvepunten van <strong>-20°C t/m 15°C</strong> als basis.</li>
            <li>Voelt herkenbaar voor wie gewend is aan een klassieke stooklijn.</li>
            <li>Handig als je de aanvoertemperatuur per buitentemperatuur zelf wilt finetunen.</li>
          </ul>
        </button>
      </div>
    `;
  }

  function renderPowerHouseResponseProfilesField() {
    if (!hasEntity("phResponseProfile")) {
      return "";
    }

    const currentValue = String(getEntityValue("phResponseProfile") || "");
    const busy = state.loadingEntities || state.busyAction === "save-phResponseProfile";
    const options = [
      {
        value: "Calm",
        label: "Rustig",
        rise: "12 min",
        fall: "5 min",
        meta: "Opbouw 12 min · Afbouw 5 min",
        copy: "Reageert minder snel op schommelingen. Fijn voor vloerverwarming of een woning die traag opwarmt en afkoelt.",
      },
      {
        value: "Balanced",
        label: "Gebalanceerd",
        rise: "8 min",
        fall: "3 min",
        meta: "Opbouw 8 min · Afbouw 3 min",
        copy: "Goede middenweg tussen comfort en rust. Meestal het beste startpunt voor dagelijks gebruik.",
      },
      {
        value: "Responsive",
        label: "Direct",
        rise: "5 min",
        fall: "2 min",
        meta: "Opbouw 5 min · Afbouw 2 min",
        copy: "Reageert sneller op veranderende warmtevraag. Handig als je woning snel afkoelt of je sneller effect wilt zien.",
      },
      {
        value: "Custom",
        label: "Aangepast",
        rise: "Vrij",
        fall: "Instelbaar",
        meta: "Opbouw en afbouw instelbaar",
        copy: "Stel zelf in hoe snel de regeling op- en afbouwt. Handig als de standaardprofielen net niet goed passen.",
      },
    ];
    const controlMarkup = `
      <div class="oq-settings-choice-grid oq-settings-choice-grid--response">
        ${options.map((option) => {
          const isActive = option.value === currentValue;
          if (option.value === "Custom" && isActive) {
            return `
              <div class="oq-settings-choice-card oq-settings-choice-card--static oq-settings-choice-card--custom is-active">
                <span class="oq-settings-choice-title">${escapeHtml(option.label)}</span>
                <div class="oq-settings-choice-meta">
                  <span class="oq-settings-choice-meta-text">${escapeHtml(option.meta)}</span>
                </div>
                <span class="oq-settings-choice-copy">${escapeHtml(option.copy)}</span>
                <div class="oq-settings-choice-inline-grid oq-settings-choice-inline-grid--inside-card">
                  ${renderSettingsMiniNumberField("phDemandRiseTime", "Opbouwtijd", "Tijd waarmee de warmtevraag bij oplopende vraag naar het nieuwe niveau toeloopt.", { compact: true, showCopy: false, infoId: "phDemandRiseTime-inline", embedded: true })}
                  ${renderSettingsMiniNumberField("phDemandFallTime", "Afbouwtijd", "Tijd waarmee de warmtevraag bij afnemende vraag weer terugzakt.", { compact: true, showCopy: false, infoId: "phDemandFallTime-inline", embedded: true })}
                </div>
              </div>
            `;
          }
          return `
            <button
              class="oq-settings-choice-card${isActive ? " is-active" : ""}"
              type="button"
              data-oq-action="select-settings-option"
              data-select-key="phResponseProfile"
              data-select-option="${escapeHtml(option.value)}"
              aria-pressed="${isActive ? "true" : "false"}"
              ${busy ? "disabled" : ""}
            >
              <span class="oq-settings-choice-title">${escapeHtml(option.label)}</span>
              <div class="oq-settings-choice-meta">
                <span class="oq-settings-choice-meta-text">${escapeHtml(option.meta)}</span>
              </div>
              <span class="oq-settings-choice-copy">${escapeHtml(option.copy)}</span>
            </button>
          `;
        }).join("")}
      </div>
    `;

    return renderSettingsFieldCard(
      "phResponseProfile",
      "Power House responsprofiel",
      "Kies hoe rustig of direct Power House mag reageren op veranderingen in je woning.",
      controlMarkup,
      "oq-settings-field--span-2",
    );
  }

  function renderHeatingCurveProfileField() {
    if (!hasEntity("curveControlProfile")) {
      return "";
    }

    const currentValue = String(getEntityValue("curveControlProfile") || "");
    const busy = state.loadingEntities || state.busyAction === "save-curveControlProfile";
    const options = [
      {
        value: "Comfort",
        label: "Comfort",
        meta: "Eerder starten · Fijner trimmen",
        copy: "Reageert wat actiever en laat de aanvoertemperatuur eerder oplopen. Fijn als je vooral comfort wilt.",
      },
      {
        value: "Balanced",
        label: "Gebalanceerd",
        meta: "Middenweg · Voorspelbaar gedrag",
        copy: "De standaard middenweg voor dagelijks gebruik. Voorspelbaar en tegelijk vlot genoeg.",
      },
      {
        value: "Stable",
        label: "Stabiel",
        meta: "Meer filtering · Rustigere stappen",
        copy: "Reageert rustiger en stuurt minder snel bij. Fijn als je zo min mogelijk schommelingen wilt.",
      },
    ];

    const controlMarkup = `
      <div class="oq-settings-choice-grid oq-settings-choice-grid--curve">
        ${options.map((option) => `
          <button
            class="oq-settings-choice-card${option.value === currentValue ? " is-active" : ""}"
            type="button"
            data-oq-action="select-settings-option"
            data-select-key="curveControlProfile"
            data-select-option="${escapeHtml(option.value)}"
            aria-pressed="${option.value === currentValue ? "true" : "false"}"
            ${busy ? "disabled" : ""}
          >
            <span class="oq-settings-choice-title">${escapeHtml(option.label)}</span>
            <div class="oq-settings-choice-meta">
              <span class="oq-settings-choice-meta-text">${escapeHtml(option.meta)}</span>
            </div>
            <span class="oq-settings-choice-copy">${escapeHtml(option.copy)}</span>
          </button>
        `).join("")}
      </div>
    `;

    return renderSettingsFieldCard(
      "curveControlProfile",
      "Regelprofiel",
      "Kies of de stooklijn vooral comfortabel, gebalanceerd of rustig moet reageren.",
      controlMarkup,
      "oq-settings-field--span-2",
    );
  }

  function renderPowerHouseConceptGraphic() {
    const safe = (key, fallback = 0) => {
      const numeric = getEntityNumericValue(key);
      return Number.isNaN(numeric) ? fallback : Math.max(0, numeric);
    };
    const exampleSetpoint = 20;
    const comfortBelow = safe("phComfortBelow", 0.1);
    const comfortAbove = safe("phComfortAbove", 0.3);
    const temperatureReaction = safe("phKp", 3000);

    const quietMin = exampleSetpoint - comfortBelow;
    const quietMax = exampleSetpoint + comfortAbove;

    const width = 620;
    const height = 184;
    const left = 46;
    const right = 24;
    const top = 18;
    const bottom = 40;
    const axisY = 96;
    const plotWidth = width - left - right;
    const minTemp = Math.min(exampleSetpoint - 1.2, quietMin - 0.35);
    const maxTemp = Math.max(exampleSetpoint + 1.2, quietMax + 0.35);
    const toX = (temp) => left + ((temp - minTemp) / Math.max(0.01, maxTemp - minTemp)) * plotWidth;

    const leftX = toX(minTemp);
    const rightX = toX(maxTemp);
    const quietMinX = toX(quietMin);
    const setpointX = toX(exampleSetpoint);
    const quietMaxX = toX(quietMax);
    const showQuietMinTick = Math.abs(quietMin - exampleSetpoint) > 0.001;
    const showQuietMaxTick = Math.abs(quietMax - exampleSetpoint) > 0.001;
    const curveTopY = top + 24;
    const curveBottomY = height - bottom;
    const tooltipY = axisY - 44;
    const renderConceptTooltip = (x, kicker, detail, modifier = "") => {
      const width = 110;
      const height = 36;
      const tooltipX = Math.max(leftX + 4, Math.min(rightX - width - 4, x - width / 2));
      const hitX = x - 14;
      const hitY = tooltipY;
      const hitWidth = 28;
      const hitHeight = axisY - tooltipY + 16;
      return `
        <g class="oq-ph-concept-hotspot" tabindex="0" role="img" aria-label="${escapeHtml(`${kicker} ${detail}`)}">
          <rect class="oq-ph-concept-hit" x="${hitX}" y="${hitY}" width="${hitWidth}" height="${hitHeight}" rx="10"></rect>
          <circle class="oq-ph-concept-hit" cx="${x}" cy="${axisY}" r="14"></circle>
          <g class="oq-ph-concept-tooltip${modifier ? ` oq-ph-concept-tooltip--${modifier}` : ""}" transform="translate(${tooltipX} ${tooltipY})">
            <rect class="oq-ph-concept-tooltip-panel" width="${width}" height="${height}" rx="10"></rect>
            <text x="${width / 2}" y="14" text-anchor="middle" class="oq-ph-concept-tooltip-kicker">${escapeHtml(kicker)}</text>
            <text x="${width / 2}" y="27" text-anchor="middle" class="oq-ph-concept-tooltip-detail">${escapeHtml(detail)}</text>
          </g>
        </g>
      `;
    };
    const linePath = [
      `M ${leftX.toFixed(1)} ${curveTopY.toFixed(1)}`,
      `L ${quietMinX.toFixed(1)} ${axisY.toFixed(1)}`,
      `L ${quietMaxX.toFixed(1)} ${axisY.toFixed(1)}`,
      `L ${rightX.toFixed(1)} ${curveBottomY.toFixed(1)}`,
    ].join(" ");

    return `
      <div class="oq-ph-concept-card">
        <div class="oq-ph-concept-visual">
          <p class="oq-ph-concept-kicker">Kamercorrectie op Power House-huisvraag</p>
          <div class="oq-ph-concept-caption">
            Conceptueel: deze grafiek toont de kamercorrectie boven op de berekende Power House-huisvraag. Onder de comfortgrens loopt die correctie op, binnen de comfortband blijft de directe reactie vlak terwijl opgebouwde comfort memory nog kan doorwerken, en boven de bovengrens start warme tegensturing.
          </div>
          <div class="oq-ph-concept-meta">
            <span class="oq-ph-concept-meta-pill">Setpoint <strong>${escapeHtml(formatNumericState(exampleSetpoint, 1, "°C"))}</strong></span>
            <span class="oq-ph-concept-meta-pill">Comfortband <strong>${escapeHtml(formatNumericState(quietMin, 1, "°C"))} – ${escapeHtml(formatNumericState(quietMax, 1, "°C"))}</strong></span>
            <span class="oq-ph-concept-meta-pill">Temperatuurreactie <strong>${escapeHtml(formatNumericState(temperatureReaction, 0, " W/K"))}</strong></span>
          </div>
          <svg class="oq-ph-concept-svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="Grafiek voor Power House tuning">
            <rect x="${leftX.toFixed(1)}" y="${top}" width="${Math.max(20, quietMinX - leftX).toFixed(1)}" height="${(height - top - bottom).toFixed(1)}" rx="18" class="oq-ph-concept-band oq-ph-concept-band--below"></rect>
            <rect x="${quietMinX.toFixed(1)}" y="${top}" width="${Math.max(20, quietMaxX - quietMinX).toFixed(1)}" height="${(height - top - bottom).toFixed(1)}" rx="18" class="oq-ph-concept-band oq-ph-concept-band--calm"></rect>
            <rect x="${quietMaxX.toFixed(1)}" y="${top}" width="${Math.max(20, rightX - quietMaxX).toFixed(1)}" height="${(height - top - bottom).toFixed(1)}" rx="18" class="oq-ph-concept-band oq-ph-concept-band--above"></rect>

            <line x1="${leftX}" y1="${top}" x2="${leftX}" y2="${height - bottom}" class="oq-ph-concept-axis"></line>
            <line x1="${leftX}" y1="${axisY}" x2="${rightX}" y2="${axisY}" class="oq-ph-concept-axis"></line>
            <line x1="${setpointX}" y1="${top}" x2="${setpointX}" y2="${height - bottom}" class="oq-ph-concept-axis oq-ph-concept-axis--vertical"></line>

            <path d="${linePath}" class="oq-ph-concept-curve"></path>

            ${showQuietMinTick ? `<line x1="${quietMinX}" y1="${axisY - 12}" x2="${quietMinX}" y2="${axisY + 12}" class="oq-ph-concept-marker oq-ph-concept-marker--below"></line>` : ""}
            <line x1="${setpointX}" y1="${axisY - 14}" x2="${setpointX}" y2="${axisY + 14}" class="oq-ph-concept-marker oq-ph-concept-marker--setpoint"></line>
            ${showQuietMaxTick ? `<line x1="${quietMaxX}" y1="${axisY - 12}" x2="${quietMaxX}" y2="${axisY + 12}" class="oq-ph-concept-marker oq-ph-concept-marker--above"></line>` : ""}
            ${showQuietMinTick ? `<circle cx="${quietMinX}" cy="${axisY}" r="5" class="oq-ph-concept-point oq-ph-concept-point--below"></circle>` : ""}
            <circle cx="${setpointX}" cy="${axisY}" r="6" class="oq-ph-concept-point oq-ph-concept-point--setpoint"></circle>
            ${showQuietMaxTick ? `<circle cx="${quietMaxX}" cy="${axisY}" r="5" class="oq-ph-concept-point oq-ph-concept-point--above"></circle>` : ""}
            ${showQuietMinTick ? renderConceptTooltip(quietMinX, "Comfort onder setpoint", formatNumericState(quietMin, 1, "°C"), "below") : ""}
            ${renderConceptTooltip(setpointX, "Setpoint", formatNumericState(exampleSetpoint, 1, "°C"), "setpoint")}
            ${showQuietMaxTick ? renderConceptTooltip(quietMaxX, "Comfort boven setpoint", formatNumericState(quietMax, 1, "°C"), "above") : ""}

            <text x="${leftX + 8}" y="${top + 18}" text-anchor="start" class="oq-ph-concept-label oq-ph-concept-label--heat">meer warmte</text>
            <text x="${leftX + 8}" y="${height - bottom - 8}" text-anchor="start" class="oq-ph-concept-label">minder warmte</text>
            <text x="${leftX}" y="${height - 26}" text-anchor="start" class="oq-ph-concept-label">kouder</text>
            <text x="${rightX}" y="${height - 26}" text-anchor="end" class="oq-ph-concept-label">warmer</text>

            ${showQuietMinTick ? `<text x="${quietMinX - 5}" y="${height - 14}" text-anchor="end" class="oq-ph-concept-tick-value">${escapeHtml(formatNumericState(quietMin, 1, "°C"))}</text>` : ""}
            <text x="${setpointX}" y="${height - 14}" text-anchor="middle" class="oq-ph-concept-tick-value oq-ph-concept-tick-value--setpoint">${escapeHtml(formatNumericState(exampleSetpoint, 1, "°C"))}</text>
            ${showQuietMaxTick ? `<text x="${quietMaxX + 5}" y="${height - 14}" text-anchor="start" class="oq-ph-concept-tick-value">${escapeHtml(formatNumericState(quietMax, 1, "°C"))}</text>` : ""}
          </svg>
        </div>
        <div class="oq-ph-concept-zones">
          <span class="oq-ph-concept-zone-chip oq-ph-concept-zone-chip--below">
            <span class="oq-ph-concept-zone-chip-label">extra opwarming</span>
            <span class="oq-ph-concept-zone-chip-meta">onder ${escapeHtml(formatNumericState(quietMin, 1, "°C"))}</span>
          </span>
          <span class="oq-ph-concept-zone-chip oq-ph-concept-zone-chip--calm">
            <span class="oq-ph-concept-zone-chip-label">comfortband</span>
            <span class="oq-ph-concept-zone-chip-meta">${escapeHtml(formatNumericState(quietMin, 1, "°C"))} – ${escapeHtml(formatNumericState(quietMax, 1, "°C"))}</span>
          </span>
          <span class="oq-ph-concept-zone-chip oq-ph-concept-zone-chip--above">
            <span class="oq-ph-concept-zone-chip-label">warme tegensturing</span>
            <span class="oq-ph-concept-zone-chip-meta">boven ${escapeHtml(formatNumericState(quietMax, 1, "°C"))}</span>
          </span>
        </div>
        <div class="oq-ph-concept-notes">
          <article class="oq-ph-concept-note">
            <span class="oq-ph-concept-note-title">Comfort onder</span>
            <p>Bepaalt wanneer extra opwarming begint onder het setpoint.</p>
          </article>
          <article class="oq-ph-concept-note">
            <span class="oq-ph-concept-note-title">Comfortband</span>
            <p>Binnen deze band blijft de directe temperatuurreactie vlak. Een opgebouwde comfort memory kan hier nog wel even doorwerken en loopt daarna rustig af.</p>
          </article>
          <article class="oq-ph-concept-note">
            <span class="oq-ph-concept-note-title">Temperatuurreactie</span>
            <p>Bepaalt hoe sterk Power House buiten de comfortband extra of minder warmtevraag als kamercorrectie toevoegt boven op de berekende huisvraag.</p>
          </article>
        </div>
      </div>
    `;
  }

  function renderPowerHouseAdvancedField() {
    const fields = [
      renderSettingsNumberField("phKp", "Temperatuurreactie", "Bepaalt hoe sterk Power House kamertemperatuurafwijking vertaalt naar extra of minder warmtevraag in W/K. Hogere waarden reageren steviger, lagere waarden rustiger.", "", { unitOverride: "W/K" }),
      renderSettingsNumberField("phComfortBelow", "Comfort onder setpoint", "Extra comfortmarge onder het setpoint. Hiermee kan Power House iets sneller warmte vragen als de kamertemperatuur merkbaar onder het doel zakt."),
      renderSettingsNumberField("phComfortAbove", "Comfort boven setpoint", "Bovenmarge rond het setpoint. Hiermee bepaal je hoeveel ruimte er boven het setpoint mag ontstaan voordat warme tegensturing begint."),
    ].filter(Boolean);

    if (!fields.length) {
      return "";
    }

    return `
      <div class="oq-settings-subpanel oq-settings-subpanel--nested">
        <div class="oq-settings-subpanel-head">
          <p class="oq-helper-label">Power House tuning</p>
          <h4>Geavanceerde Power House tuning</h4>
          <p>Met deze instellingen verfijn je hoe Power House reageert rond het kamersetpoint. De grafiek hierboven laat meteen zien wat dat betekent.</p>
        </div>
        ${renderPowerHouseConceptGraphic()}
        <div class="oq-settings-grid">
          ${fields.join("")}
        </div>
      </div>
    `;
  }

  function renderSettingsHeatPumpLimiterCard(title, keyA, keyB) {
    const fields = [
      renderSettingsSelectField(keyA, "1e compressorstand uitsluiten", "Sla deze compressorstand over als je die liever niet gebruikt."),
      renderSettingsSelectField(keyB, "2e compressorstand uitsluiten", "Nog een compressorstand die je eventueel wilt overslaan."),
    ]
      .filter(Boolean)
      .join("");

    if (!fields) {
      return "";
    }

    return `
      <article class="oq-settings-hp-group">
        <header>
          <h4>${escapeHtml(title)}</h4>
        </header>
        <div class="oq-settings-hp-group-grid">
          ${fields}
        </div>
      </article>
    `;
  }

  function renderSettingsFlowSection() {
    return renderSettingsSection(
      "Flow",
      "Flowregeling",
      "Kies of OpenQuatt de pomp automatisch op flow regelt, of dat je zelf een vaste pompstand instelt.",
      `
        <div class="oq-settings-grid">
          ${renderSettingsSelectField("flowControlMode", "Regelmodus", "Kies tussen automatische flowregeling en een vaste pompstand.")}
          ${isManualFlowMode()
            ? renderSettingsNumberField("manualIpwm", "Vaste pompstand", "Deze pompstand wordt gebruikt zolang de regeling op handmatig staat.")
            : renderSettingsNumberField("flowSetpoint", "Gewenste flow", "De flow die OpenQuatt zoveel mogelijk probeert vast te houden.")}
        </div>
      `,
    );
  }

  function renderSettingsHeatingSection() {
    const strategyContent = isCurveMode()
      ? `
        <div class="oq-settings-subpanel">
          <div class="oq-settings-subpanel-head">
            <p class="oq-helper-label">Stooklijn</p>
            <h4>Stooklijn</h4>
            <p>Stel hier je stooklijn in en kies wat OpenQuatt moet doen als er geen buitentemperatuur beschikbaar is.</p>
          </div>
          <div class="oq-settings-grid">
            ${renderHeatingCurveProfileField()}
          </div>
          <div class="oq-settings-curve-shell">
            ${renderCurveGraph()}
          </div>
          ${renderSettingsCurveInputs()}
        </div>
      `
      : `
        <div class="oq-settings-subpanel">
          <div class="oq-settings-subpanel-head">
            <p class="oq-helper-label">Power House</p>
            <h4>Power House</h4>
            <p>Met deze waarden schat OpenQuatt hoeveel warmte je woning nodig heeft. Heb je deze gegevens van Quatt, dan kun je ze hier als startpunt gebruiken.</p>
          </div>
          <div class="oq-settings-grid">
            ${renderSettingsNumberField("houseOutdoorMax", "Maximum heating outdoor temperature", "Bij deze buitentemperatuur is verwarmen meestal niet meer nodig.")}
            ${renderSettingsNumberField("housePower", "Rated maximum house power", "Hoeveel warmte je woning ongeveer nodig heeft op een koude dag.")}
            ${renderPowerHouseResponseProfilesField()}
          </div>
          ${renderPowerHouseAdvancedField()}
        </div>
      `;

    return renderSettingsSection(
      "Regeling",
      "Verwarmingsstrategie",
      "Kies hier hoe OpenQuatt je verwarming regelt. De instellingen hieronder passen zich automatisch aan.",
      `
        <div class="oq-settings-grid">
          ${renderSettingsSelectField("strategy", "Verwarmingsstrategie", "Kies tussen automatisch regelen met Power House of regelen met een stooklijn.")}
        </div>
        ${renderHeatingStrategyExplainCards()}
        ${strategyContent}
      `,
    );
  }

  function renderSettingsWaterSection() {
    return renderSettingsSection(
      "Maximale watertemperatuur",
      "Watertemperatuur",
      "Beschermt het systeem tegen te hoge aanvoertemperaturen. OpenQuatt regelt richting deze grens terug en grijpt 5°C erboven hard in.",
      `
        <div class="oq-settings-grid">
          ${renderSettingsNumberField("maxWater", "Maximale watertemperatuur", "Normale bovengrens voor de watertemperatuur tijdens bedrijf. OpenQuatt begint enkele graden eerder al terug te regelen en bewaakt een harde trip op 5°C boven deze grens.")}
        </div>
      `,
    );
  }

  function renderSettingsCompressorSection() {
    const hpGroups = [
      renderSettingsHeatPumpLimiterCard("HP1", "hp1ExcludedA", "hp1ExcludedB"),
      renderSettingsHeatPumpLimiterCard("HP2", "hp2ExcludedA", "hp2ExcludedB"),
    ].filter(Boolean).join("");

    return renderSettingsSection(
      "Compressor",
      "Compressor",
      "Extra instellingen voor minimale draaitijd en compressorstanden die je liever niet gebruikt.",
      `
        <div class="oq-settings-grid">
          ${renderSettingsNumberField("minRuntime", "Minimale draaitijd", "Zo voorkom je dat de warmtepomp te kort achter elkaar start en stopt.")}
        </div>
        <div class="oq-settings-hp-columns${hasEntity("hp2ExcludedA") ? "" : " oq-settings-hp-columns--single"}">
          ${hpGroups}
        </div>
      `,
    );
  }

  function renderSettingsSilentSection() {
    return renderSettingsSection(
      "Stille uren",
      "Stille uren",
      "Kies wanneer het systeem stiller moet werken, en hoe ver het dan nog mag opschalen.",
      `
        <div class="oq-settings-grid">
          ${renderSettingsTimeField("silentStartTime", "Start stille uren", "Vanaf dit tijdstip werkt het systeem in stille modus.")}
          ${renderSettingsTimeField("silentEndTime", "Einde stille uren", "Vanaf dit tijdstip stopt de stille modus weer.")}
          ${renderSettingsSliderField("silentMax", "Maximaal niveau tijdens stille uren", "Zo ver mag het systeem nog opschalen tijdens stille uren.")}
          ${renderSettingsSliderField("dayMax", "Maximaal niveau overdag", "Zo ver mag het systeem overdag opschalen.")}
        </div>
      `,
    );
  }

  function renderSettingsCoolingSection() {
    if (!hasEntity("coolingWithoutDewPointMode")) {
      return "";
    }

    const fallbackModeCopy = {
      "Dew point required": "Blokkeer koeling zodra er geen dauwpuntbron beschikbaar is.",
      "Allow without dew point": "Sta een conservatieve fallback toe op basis van buitentemperatuur en de minimum buitentemperatuur van de afgelopen nacht.",
    };

    const guardMode = getEntityStateText("coolingGuardMode", "Onbekend");
    const fallbackFloor = getEntityStateText("coolingFallbackMinSupplyTemp", "—");
    const nightMin = getEntityStateText("coolingFallbackNightMinOutdoorTemp", "—");
    const effectiveFloor = getEntityStateText("coolingEffectiveMinSupplyTemp", "—");

    return renderSettingsSection(
      "Koeling",
      "Koeling zonder dauwpunt",
      "Standaard blijft koeling zonder dauwpuntbron geblokkeerd. Met deze opt-in mag OpenQuatt een conservatieve fallback gebruiken op basis van buitentemperatuur en de afgelopen nacht.",
      `
        <details class="oq-settings-callout oq-settings-callout--cooling">
          <summary>Fallback-regel bekijken</summary>
          <div class="oq-settings-callout-body">
            <p>Onder de 20°C buiten blijft fallback-cooling uit. Daarboven gebruikt OpenQuatt 19/20/21/22°C als minimum water, met extra correctie voor warme nachten.</p>
            <div class="oq-settings-rule-groups">
              <section class="oq-settings-rule-group">
                <h4>Buitentemperatuur</h4>
                <div class="oq-settings-rule-table">
                  <div class="oq-settings-rule-row">
                    <span class="oq-settings-rule-key">Onder 20°C</span>
                    <span class="oq-settings-rule-value">Uit</span>
                  </div>
                  <div class="oq-settings-rule-row">
                    <span class="oq-settings-rule-key">20-24°C</span>
                    <span class="oq-settings-rule-value">Min. water 19°C</span>
                  </div>
                  <div class="oq-settings-rule-row">
                    <span class="oq-settings-rule-key">24-28°C</span>
                    <span class="oq-settings-rule-value">Min. water 20°C</span>
                  </div>
                  <div class="oq-settings-rule-row">
                    <span class="oq-settings-rule-key">28-32°C</span>
                    <span class="oq-settings-rule-value">Min. water 21°C</span>
                  </div>
                  <div class="oq-settings-rule-row">
                    <span class="oq-settings-rule-key">Boven 32°C</span>
                    <span class="oq-settings-rule-value">Min. water 22°C</span>
                  </div>
                </div>
              </section>
              <section class="oq-settings-rule-group">
                <h4>Nachtcorrectie</h4>
                <div class="oq-settings-rule-table">
                  <div class="oq-settings-rule-row">
                    <span class="oq-settings-rule-key">Onder 18°C</span>
                    <span class="oq-settings-rule-value">+0°C</span>
                  </div>
                  <div class="oq-settings-rule-row">
                    <span class="oq-settings-rule-key">18-19°C</span>
                    <span class="oq-settings-rule-value">+1°C</span>
                  </div>
                  <div class="oq-settings-rule-row">
                    <span class="oq-settings-rule-key">19-20°C</span>
                    <span class="oq-settings-rule-value">+2°C</span>
                  </div>
                  <div class="oq-settings-rule-row">
                    <span class="oq-settings-rule-key">Vanaf 20°C</span>
                    <span class="oq-settings-rule-value">Fallback uit</span>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </details>
        <div class="oq-settings-grid">
          ${renderSettingsOptionCardsField("coolingWithoutDewPointMode", "Koeling zonder dauwpuntbeveiliging", "Kies of OpenQuatt zonder dauwpuntbron volledig moet blokkeren, of een conservatieve fallback mag gebruiken.", fallbackModeCopy, "oq-settings-field--span-2")}
          ${renderSettingsStaticField("coolingGuardMode", "Actieve beveiligingsroute", "Laat zien of koeling nu via dauwpunt of via de fallback wordt begrensd.", guardMode)}
          ${renderSettingsStaticField("coolingFallbackNightMinOutdoorTemp", "Nachtminimum buitentemperatuur", "Minimum buitentemperatuur van de afgelopen nacht. Warme nachten maken fallback-cooling conservatiever of blokkeren die helemaal.", nightMin)}
          ${renderSettingsStaticField("coolingFallbackMinSupplyTemp", "Fallback minimum watertemperatuur", "De conservatieve ondergrens die OpenQuatt gebruikt als er geen dauwpuntbron beschikbaar is en fallback is toegestaan.", fallbackFloor)}
          ${renderSettingsStaticField("coolingEffectiveMinSupplyTemp", "Actieve minimum ondergrens", "De ondergrens die de koeling nu daadwerkelijk gebruikt: dauwpunt plus marge, of de fallback-ondergrens.", effectiveFloor)}
        </div>
      `,
    );
  }

  function renderPowerHouseWorkspace() {
    return `
      <section class="oq-helper-mode-panel">
        <div class="oq-helper-mode-head">
          <p class="oq-helper-label">Verplicht Voor Power House</p>
          <p class="oq-helper-section-copy">Met deze waarden schat OpenQuatt hoeveel warmte je woning nodig heeft. Heb je deze gegevens van Quatt, dan kun je ze hier gebruiken.</p>
        </div>
        <div class="oq-helper-control-grid">
          ${renderNumberInputField("housePower", "Rated maximum house power", "Hoeveel warmte je woning ongeveer nodig heeft op een koude dag.")}
          ${renderNumberInputField("houseOutdoorMax", "Maximum heating outdoor temperature", "Bij deze buitentemperatuur is verwarmen meestal niet meer nodig.")}
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
          <h3>Stooklijn-editor</h3>
          <p>Stel de verwarmingscurve in door de punten te verslepen en zo de zes vereiste aanvoertemperaturen te bepalen.</p>
        </div>
        <svg class="oq-helper-curve-svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="Stooklijn-editor">
          ${gridLines}
          <polyline points="${linePoints}" class="oq-helper-curve-line" />
          ${circles}
          ${xLabels}
        </svg>
      </div>
    `;
  }

  function renderCurveInputs() {
    const suggestion = getCurveFallbackSuggestion();
    const suggestionMarkup = suggestion ? `
      <div class="oq-curve-fallback-suggest oq-curve-fallback-suggest--inside oq-curve-fallback-suggest--helper">
        <div class="oq-curve-fallback-suggest-copy">
          <strong>Suggestie: ${escapeHtml(suggestion.label)}</strong>
          <span>${escapeHtml(suggestion.basis)}</span>
        </div>
        <button
          class="oq-helper-button oq-helper-button--ghost"
          type="button"
          data-oq-action="suggest-curve-fallback"
          ${state.loadingEntities || state.busyAction === "save-curveFallbackSupply" || suggestion.isCurrent ? "disabled" : ""}
        >
          ${suggestion.isCurrent ? "Actief" : "Gebruik suggestie"}
        </button>
      </div>
    ` : "";
    return `
      <div class="oq-helper-curve-grid">
        ${CURVE_POINTS.map((point) => renderNumberInputField(point.key, `Aanvoertemp. bij ${point.label}`, `Doelaanvoertemperatuur bij ${point.label} buitentemperatuur.`)).join("")}
        ${renderNumberInputField("curveFallbackSupply", "Fallback-aanvoertemperatuur zonder buitentemperatuur", "Aanvoertemperatuur die gebruikt wordt als de buitentemperatuursensor niet beschikbaar is.", { footerMarkup: suggestionMarkup })}
      </div>
    `;
  }

  function renderCurveWorkspace() {
    return `
      <section class="oq-helper-mode-panel">
        <div class="oq-helper-mode-head">
          <p class="oq-helper-label">Verplicht voor Stooklijn</p>
          <p class="oq-helper-section-copy">Deze zes punten vormen samen je stooklijn. Zo bepaal je welke aanvoertemperatuur hoort bij welke buitentemperatuur.</p>
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
        <p class="oq-helper-section-copy">Kies hier hoe OpenQuatt je verwarming regelt. Daarna lopen we samen de belangrijkste instellingen langs.</p>
        ${renderHeatingStrategyExplainCards()}
        <div class="oq-settings-grid oq-settings-grid--quickstart">
          ${renderSettingsSelectField("strategy", "Verwarmingsstrategie", "Kies tussen automatisch regelen met Power House of regelen met een stooklijn.")}
        </div>
        ${renderQuickStartStepNav()}
      </section>
    `;
  }

  function renderFlowWorkspace() {
    const flowSecondaryField = String(getEntityValue("flowControlMode") || "") === "Manual PWM"
      ? renderSettingsNumberField("manualIpwm", "Vaste pompstand", "Deze pompstand wordt gebruikt zolang de regeling op handmatig staat.")
      : renderSettingsNumberField("flowSetpoint", "Gewenste flow", "De flow die OpenQuatt zoveel mogelijk probeert vast te houden.");

    return `
      <section class="oq-helper-panel">
        <p class="oq-helper-label">Stap 3</p>
        <h2 class="oq-helper-section-title">Flow en pompregeling</h2>
        <p class="oq-helper-section-copy">Kies hier of OpenQuatt de pomp automatisch regelt, of dat je zelf een vaste pompstand instelt.</p>
        <div class="oq-settings-grid oq-settings-grid--quickstart">
          ${renderSettingsSelectField("flowControlMode", "Regelmodus", "Kies tussen automatische flowregeling en een vaste pompstand.")}
          ${flowSecondaryField}
        </div>
        ${renderQuickStartStepNav()}
      </section>
    `;
  }

  function renderHeatingWorkspace() {
    return `
      <section class="oq-helper-panel">
        <p class="oq-helper-label">Stap 2</p>
        <h2 class="oq-helper-section-title">${escapeHtml(isCurveMode() ? "Stooklijn instellen" : "Power House instellen")}</h2>
        <p class="oq-helper-section-copy">
          ${escapeHtml(
            isCurveMode()
              ? "Stel hier je stooklijn en fallback-aanvoertemperatuur in."
              : "Stel hier in hoe Power House het warmteverlies van je woning inschat en hoe snel het reageert.",
          )}
        </p>
        ${isCurveMode()
          ? `
            <div class="oq-settings-grid oq-settings-grid--quickstart">
              ${renderHeatingCurveProfileField()}
            </div>
            <div class="oq-settings-curve-shell">
              ${renderCurveGraph()}
            </div>
            ${renderSettingsCurveInputs()}
          `
          : `
            <div class="oq-settings-grid oq-settings-grid--quickstart">
              ${renderSettingsNumberField("houseOutdoorMax", "Maximum heating outdoor temperature", "Bij deze buitentemperatuur is verwarmen meestal niet meer nodig.")}
              ${renderSettingsNumberField("housePower", "Rated maximum house power", "Hoeveel warmte je woning ongeveer nodig heeft op een koude dag.")}
              ${renderPowerHouseResponseProfilesField()}
            </div>
            ${renderPowerHouseAdvancedField()}
          `}
        ${renderQuickStartStepNav()}
      </section>
    `;
  }

  function renderWaterWorkspace() {
    return `
      <section class="oq-helper-panel">
        <p class="oq-helper-label">Stap 4</p>
        <h2 class="oq-helper-section-title">Watertemperatuur beveiligen</h2>
        <p class="oq-helper-section-copy">Hier stel je de veilige bovengrens voor de watertemperatuur in. OpenQuatt regelt richting deze grens terug en grijpt 5°C erboven hard in.</p>
        <div class="oq-settings-grid oq-settings-grid--quickstart">
          ${renderSettingsNumberField("maxWater", "Maximale watertemperatuur", "Normale bovengrens voor de watertemperatuur tijdens bedrijf. OpenQuatt begint enkele graden eerder al terug te regelen en bewaakt een harde trip op 5°C boven deze grens.")}
        </div>
        ${renderQuickStartStepNav()}
      </section>
    `;
  }

  function renderSilentWorkspace() {
    return `
      <section class="oq-helper-panel">
        <p class="oq-helper-label">Stap 5</p>
        <h2 class="oq-helper-section-title">Stille uren en niveaus</h2>
        <p class="oq-helper-section-copy">Kies hier wanneer het systeem stiller moet werken, en hoe ver het dan nog mag opschalen.</p>
        <div class="oq-settings-grid oq-settings-grid--quickstart">
          ${renderSettingsTimeField("silentStartTime", "Start stille uren", "Vanaf dit tijdstip werkt het systeem in stille modus.")}
          ${renderSettingsTimeField("silentEndTime", "Einde stille uren", "Vanaf dit tijdstip stopt de stille modus weer.")}
          ${renderSettingsSliderField("silentMax", "Maximaal niveau tijdens stille uren", "Zo ver mag het systeem nog opschalen tijdens stille uren.")}
          ${renderSettingsSliderField("dayMax", "Maximaal niveau overdag", "Zo ver mag het systeem overdag opschalen.")}
        </div>
        ${renderQuickStartStepNav()}
      </section>
    `;
  }

  function renderConfirmWorkspace() {
    return `
      <section class="oq-helper-panel">
        <p class="oq-helper-label">Stap 6</p>
        <h2 class="oq-helper-section-title">Bevestigen en afronden</h2>
        <p class="oq-helper-section-copy">Controleer nog één keer je keuzes. Met afronden markeer je Quick Start als voltooid.</p>
        ${renderConfirmReviewCards()}
        ${state.controlNotice ? `<p class="oq-helper-notice">${escapeHtml(state.controlNotice)}</p>` : ""}
        ${state.controlError ? `<p class="oq-helper-error">${escapeHtml(state.controlError)}</p>` : ""}
        <div class="oq-helper-actions oq-helper-actions--step">
          <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="previous-step" ${state.busyAction ? "disabled" : ""}>
            Vorige
          </button>
        </div>
        <div class="oq-helper-actions">
          <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="apply" ${state.busyAction ? "disabled" : ""}>
            ${state.busyAction === "apply" ? "Afronden..." : "Quick Start afronden"}
          </button>
          <button class="oq-helper-button" type="button" data-oq-action="reset" ${state.busyAction ? "disabled" : ""}>
            ${state.busyAction === "reset" ? "Resetten..." : "Setup-status resetten"}
          </button>
        </div>
      </section>
    `;
  }

  function renderActiveStep() {
    if (state.currentStep === "flow") {
      return renderFlowWorkspace();
    }
    if (state.currentStep === "heating") {
      return renderHeatingWorkspace();
    }
    if (state.currentStep === "water") {
      return renderWaterWorkspace();
    }
    if (state.currentStep === "silent") {
      return renderSilentWorkspace();
    }
    if (state.currentStep === "confirm") {
      return renderConfirmWorkspace();
    }
    return renderStrategyWorkspace();
  }

  function getQuickStepStatus(index) {
    const currentIndex = getCurrentQuickStepIndex();
    const isSelected = index === currentIndex;
    const isDone = state.complete || index < currentIndex;
    return {
      tone: isSelected ? "current" : isDone ? "done" : "upcoming",
      label: isSelected ? "Actief" : isDone ? "Gereed" : "Volgend",
      current: isSelected,
    };
  }

  function renderStepOverview(compact = false) {
    return QUICK_STEPS.map((step, index) => {
      const stepStatus = getQuickStepStatus(index);
      return `
        <button
          class="oq-helper-field oq-helper-field--step${compact ? " oq-helper-field--compact" : ""} is-${stepStatus.tone}"
          type="button"
          data-oq-action="select-step"
          data-step-id="${escapeHtml(step.id)}"
          aria-current="${stepStatus.current ? "step" : "false"}"
        >
          <div class="oq-helper-field-step-head">
            <h3>0${index + 1}. ${escapeHtml(step.title)}</h3>
            <span class="oq-helper-field-step-state">${stepStatus.label}</span>
          </div>
          <p>${escapeHtml(step.copy)}</p>
        </button>
      `;
    }).join("");
  }

  function getCurrentQuickStep() {
    return QUICK_STEPS.find((step) => step.id === state.currentStep) || QUICK_STEPS[0];
  }

  function getCurrentQuickStepIndex() {
    return Math.max(0, QUICK_STEPS.findIndex((step) => step.id === state.currentStep));
  }

  function selectQuickStepByOffset(offset) {
    const nextIndex = Math.min(QUICK_STEPS.length - 1, Math.max(0, getCurrentQuickStepIndex() + offset));
    state.currentStep = QUICK_STEPS[nextIndex]?.id || QUICK_STEPS[0].id;
  }

  function renderQuickStartStepNav() {
    const index = getCurrentQuickStepIndex();
    const previousStep = index > 0 ? QUICK_STEPS[index - 1] : null;
    const nextStep = index < QUICK_STEPS.length - 1 ? QUICK_STEPS[index + 1] : null;

    return `
      <div class="oq-helper-step-nav">
        <div class="oq-helper-step-nav-meta">
          <strong>Stap ${index + 1} van ${QUICK_STEPS.length}</strong>
          <span>${escapeHtml(nextStep ? `Hierna: ${nextStep.title}` : "Je bent bij de laatste stap")}</span>
        </div>
        <div class="oq-helper-actions oq-helper-actions--step">
          <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="previous-step" ${previousStep ? "" : "disabled"}>
            Vorige
          </button>
          <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="next-step" ${nextStep ? "" : "disabled"}>
            ${nextStep ? "Volgende" : "Laatste stap"}
          </button>
        </div>
      </div>
    `;
  }

  function renderQuickStartSidebar() {
    const stepIndex = getCurrentQuickStepIndex();
    return `
      <section class="oq-helper-panel oq-helper-panel--aside">
        <p class="oq-helper-label">Quick Start</p>
        <h2 class="oq-helper-section-title">Snel van start, stap voor stap</h2>
        <p class="oq-helper-panel-note">Quick Start helpt je op weg met de belangrijkste keuzes. Later kun je alles verder verfijnen onder Instellingen.</p>
        <h3 class="oq-helper-aside-title">Stap ${stepIndex + 1} van ${QUICK_STEPS.length}</h3>
        <div class="oq-helper-fields oq-helper-fields--compact">
          ${renderStepOverview(true)}
        </div>
        ${state.controlNotice ? `<p class="oq-helper-notice">${escapeHtml(state.controlNotice)}</p>` : ""}
        ${state.controlError ? `<p class="oq-helper-error">${escapeHtml(state.controlError)}</p>` : ""}
      </section>
    `;
  }

  function renderConfirmReviewCards() {
    const strategyTitle = isCurveMode() ? "Stooklijn" : "Power House";
    const formatReviewOption = (key) => formatSettingsOptionLabel(getEntityStateText(key));
    const strategyLines = isCurveMode()
      ? [
          ["Regelprofiel", formatReviewOption("curveControlProfile")],
          ["Aanvoer bij -20°C", formatValue("curveM20")],
          ["Aanvoer bij -10°C", formatValue("curveM10")],
          ["Aanvoer bij 0°C", formatValue("curve0")],
          ["Aanvoer bij 5°C", formatValue("curve5")],
          ["Aanvoer bij 10°C", formatValue("curve10")],
          ["Aanvoer bij 15°C", formatValue("curve15")],
          ["Fallback-aanvoer", formatValue("curveFallbackSupply")],
        ]
      : [
          ["Profiel", formatReviewOption("phResponseProfile")],
          ["Rated maximum house power", formatValue("housePower")],
          ["Maximum heating outdoor temperature", formatValue("houseOutdoorMax")],
          ["Temperatuurreactie", formatValue("phKp")],
          ["Comfort onder setpoint", formatValue("phComfortBelow")],
          ["Comfort boven setpoint", formatValue("phComfortAbove")],
        ];

    const flowMode = String(getEntityValue("flowControlMode") || "");
    const flowLines = [
      ["Flowregeling", flowMode === "Manual PWM" ? "Vaste pompstand" : "Gewenste flow"],
      flowMode === "Manual PWM"
        ? ["Vaste pompstand", formatValue("manualIpwm")]
        : ["Gewenste flow", formatValue("flowSetpoint")],
    ];

    const waterLines = [
      ["Maximale watertemperatuur", formatValue("maxWater")],
    ];

    const silentLines = [
      ["Start stille uren", toTimeInputValue(getEntityValue("silentStartTime")) || "—"],
      ["Einde stille uren", toTimeInputValue(getEntityValue("silentEndTime")) || "—"],
      ["Maximaal niveau tijdens stille uren", formatValue("silentMax")],
      ["Maximaal niveau overdag", formatValue("dayMax")],
    ];

    const renderReviewList = (lines) => `
      <div class="oq-helper-review-list">
        ${lines
          .filter((line) => line && line[1])
          .map(
            ([label, value]) => `
              <div class="oq-helper-review-row">
                <span class="oq-helper-review-label">${escapeHtml(label)}</span>
                <strong class="oq-helper-review-value">${escapeHtml(value)}</strong>
              </div>
            `,
          )
          .join("")}
      </div>
    `;

    return `
      <div class="oq-helper-fields oq-helper-fields--review">
        <div class="oq-helper-review-column">
          <article class="oq-helper-field oq-helper-field--review">
            <h3>Verwarmingsstrategie</h3>
            <p class="oq-helper-review-summary"><strong>${escapeHtml(strategyTitle)}</strong></p>
            ${renderReviewList(strategyLines)}
          </article>
          <article class="oq-helper-field oq-helper-field--review">
            <h3>Watertemperatuur</h3>
            ${renderReviewList(waterLines)}
          </article>
        </div>
        <div class="oq-helper-review-column">
          <article class="oq-helper-field oq-helper-field--review">
            <h3>Flowregeling</h3>
            ${renderReviewList(flowLines)}
          </article>
          <article class="oq-helper-field oq-helper-field--review">
            <h3>Stille uren</h3>
            ${renderReviewList(silentLines)}
          </article>
        </div>
      </div>
    `;
  }

  function renderAppSummary() {
    const parts = [];
    parts.push(isCurveMode() ? "Stooklijn" : "Power House");
    const profile = String(getEntityValue(isCurveMode() ? "curveControlProfile" : "phResponseProfile") || "").trim();
    if (profile) {
      parts.push(`profiel ${profile}`);
    }
    const flowMode = String(getEntityValue("flowControlMode") || "").trim();
    if (flowMode) {
      parts.push(`flow ${flowMode === "Manual PWM" ? "handmatig" : "setpoint"}`);
    }
    if (flowMode === "Manual PWM" && hasEntity("manualIpwm")) {
      parts.push(`iPWM ${formatValue("manualIpwm")}`);
    } else if (hasEntity("flowSetpoint")) {
      parts.push(`flow ${formatValue("flowSetpoint")}`);
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

    return parts.filter(Boolean).join(", ") || "Quick Start-instellingen beschikbaar";
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

  function formatOverviewStatValue(key) {
    const entity = state.entities[key];
    if (!entity) {
      return "—";
    }
    const numeric = getEntityNumericValue(key);
    if (Number.isNaN(numeric)) {
      return getEntityStateText(key);
    }
    const decimals = key.toLowerCase().includes("cop") ? 1 : 0;
    return formatNumericState(numeric, decimals, entity.uom || "");
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
            <span>${escapeHtml(view.label)}</span>
            ${view.id === QUICK_START_VIEW && state.complete ? `
              <svg class="oq-helper-app-tab-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" />
              </svg>
            ` : ""}
          </button>
        `).join("")}
      </div>
    `;
  }

  function getAppViewLabel(view = state.appView) {
    return APP_VIEWS.find((item) => item.id === view)?.label || "OpenQuatt";
  }

  function syncDocumentTitle() {
    if (typeof document === "undefined") {
      return;
    }
    if (state.nativeOpen) {
      document.title = "ESPHome fallback • OpenQuatt";
      return;
    }
    const viewLabel = getAppViewLabel();
    document.title = `${viewLabel} • OpenQuatt`;
  }

  function syncDocumentTheme() {
    if (typeof document === "undefined") {
      return;
    }
    const isDark = state.overviewTheme === "dark";
    document.documentElement.classList.toggle("oq-page-dark", isDark);
    document.documentElement.classList.toggle("oq-page-light", !isDark);
    if (document.body) {
      document.body.classList.toggle("oq-page-dark", isDark);
      document.body.classList.toggle("oq-page-light", !isDark);
    }
  }

  function renderOverviewStatCard(key, label, tone, note) {
    return `
      <article class="oq-overview-stat oq-overview-stat--${escapeHtml(tone)}">
        <p>${escapeHtml(label)}</p>
        <strong>${escapeHtml(formatOverviewStatValue(key))}</strong>
        <span>${escapeHtml(note)}</span>
      </article>
    `;
  }

  function renderOverviewStatCardValue(label, value, tone, note) {
    return `
      <article class="oq-overview-stat oq-overview-stat--${escapeHtml(tone)}">
        <p>${escapeHtml(label)}</p>
        <strong>${escapeHtml(value)}</strong>
        <span>${escapeHtml(note)}</span>
      </article>
    `;
  }

  function renderOverviewStatusChip(label, value, tone = "neutral") {
    return `<span class="oq-overview-chip oq-overview-chip--${escapeHtml(tone)}"><strong>${escapeHtml(label)}:</strong> ${escapeHtml(value)}</span>`;
  }

  function getHeatPumpPanelStatusLabel(mode, running) {
    if (running) {
      return "Actief";
    }
    if (mode === "Stand-by") {
      return "Stand-by";
    }
    if (mode === "Onbekend") {
      return "Onbekend";
    }
    return "Niet actief";
  }

  function renderHpPanelStatusChip(mode, running) {
    const tone = running ? "active" : "neutral";
    const label = getHeatPumpPanelStatusLabel(mode, running);
    return `<span class="oq-overview-chip oq-overview-chip--${escapeHtml(tone)}" data-oq-bind="panel-status">${escapeHtml(label)}</span>`;
  }

  function renderHpPanelWarningChip(failureText) {
    return `
      <span
        class="oq-overview-chip oq-overview-chip--warning"
        data-oq-bind="panel-warning"
        tabindex="0"
        aria-label="${escapeHtml(`Waarschuwing: ${failureText}`)}"
      >
        <svg class="oq-overview-chip-warning-icon" viewBox="0 0 20 18" aria-hidden="true">
          <path d="M10 1.6 L18.2 16.4 H1.8 Z" />
          <rect x="9.1" y="5.4" width="1.8" height="5.8" rx="0.9" />
          <circle cx="10" cy="13.6" r="1.1" />
        </svg>
        <span>Waarschuwing</span>
        <span class="oq-overview-chip-warning-tooltip" role="tooltip">${escapeHtml(failureText)}</span>
      </span>
    `;
  }

  function renderHpPanelStatusRow(mode, running, warningActive, failureText) {
    return `${warningActive ? renderHpPanelWarningChip(failureText) : ""}${renderHpPanelStatusChip(mode, running)}`;
  }

  function patchHpPanelStatusRow(headStatus, mode, running, warningActive, failureText) {
    if (!headStatus) {
      return;
    }

    let warningNode = headStatus.querySelector('[data-oq-bind="panel-warning"]');
    if (warningActive) {
      if (!warningNode) {
        headStatus.insertAdjacentHTML("afterbegin", renderHpPanelWarningChip(failureText));
        warningNode = headStatus.querySelector('[data-oq-bind="panel-warning"]');
      }
      if (warningNode) {
        warningNode.setAttribute("aria-label", `Waarschuwing: ${failureText}`);
        const warningTooltip = warningNode.querySelector(".oq-overview-chip-warning-tooltip");
        if (warningTooltip && warningTooltip.textContent !== failureText) {
          warningTooltip.textContent = failureText;
        }
      }
    } else if (warningNode) {
      warningNode.remove();
    }

    const statusTone = running ? "active" : "neutral";
    const statusLabel = getHeatPumpPanelStatusLabel(mode, running);
    let statusNode = headStatus.querySelector('[data-oq-bind="panel-status"]');
    if (!statusNode) {
      headStatus.insertAdjacentHTML("beforeend", renderHpPanelStatusChip(mode, running));
      statusNode = headStatus.querySelector('[data-oq-bind="panel-status"]');
    }
    if (statusNode) {
      statusNode.classList.remove("oq-overview-chip--active", "oq-overview-chip--neutral");
      statusNode.classList.add(`oq-overview-chip--${statusTone}`);
      if (statusNode.textContent !== statusLabel) {
        statusNode.textContent = statusLabel;
      }
    }
  }

  function renderTempRow(label, key, explicitValue = "") {
    return `
      <div class="oq-overview-row">
        <span>${escapeHtml(label)}</span>
        <strong>${escapeHtml(explicitValue || getEntityStateText(key))}</strong>
      </div>
    `;
  }

  function renderOverviewLane(label, value, tone = "blue", note = "") {
    return `
      <article class="oq-overview-lane oq-overview-lane--${escapeHtml(tone)}">
        <span>${escapeHtml(label)}</span>
        <strong>${escapeHtml(value)}</strong>
        ${note ? `<p>${escapeHtml(note)}</p>` : ""}
      </article>
    `;
  }

  function renderOverviewMetricCard(label, value, tone = "blue", note = "") {
    return `
      <article class="oq-overview-metric oq-overview-metric--${escapeHtml(tone)}">
        <span>${escapeHtml(label)}</span>
        <strong>${escapeHtml(value)}</strong>
        ${note ? `<p>${escapeHtml(note)}</p>` : ""}
      </article>
    `;
  }

  function formatSignedTemperature(value) {
    if (Number.isNaN(value)) {
      return "—";
    }
    return `${value > 0 ? "+" : ""}${value.toFixed(1)} °C`;
  }

  function formatNumericState(value, decimals, unit = "") {
    const numeric = Number(value);
    if (Number.isNaN(numeric)) {
      return "—";
    }
    return `${numeric.toFixed(decimals)}${unit ? ` ${unit}` : ""}`;
  }

  function formatSignedPower(value) {
    const numeric = Number(value);
    if (Number.isNaN(numeric)) {
      return "—";
    }
    const prefix = numeric > 0 ? "+" : numeric < 0 ? "-" : "";
    return `${prefix}${Math.abs(numeric).toFixed(0)} W`;
  }

  function getOverviewOutsideTempKey() {
    if (hasEntity("outsideTempSelected")) {
      return "outsideTempSelected";
    }
    if (hasEntity("hp1OutsideTemp")) {
      return "hp1OutsideTemp";
    }
    if (hasEntity("hp2OutsideTemp")) {
      return "hp2OutsideTemp";
    }
    return "";
  }

  function getOverviewReturnTempKey() {
    if (hasEntity("hp1WaterIn")) {
      return "hp1WaterIn";
    }
    if (hasEntity("hp2WaterIn")) {
      return "hp2WaterIn";
    }
    return "";
  }

  function isCoolingOverviewActive() {
    const modeLabel = getEntityStateText("controlModeLabel", "").toLowerCase();
    if (modeLabel.includes("cm5") || modeLabel.includes("cooling") || modeLabel.includes("koeling")) {
      return true;
    }
    return isEntityActive("coolingRequestActive") || isEntityActive("coolingEnableSelected");
  }

  function getOverviewStrategyLabel() {
    if (isCoolingOverviewActive()) {
      return "Koeling";
    }
    return isCurveMode() ? "Stooklijn" : "Power House";
  }

  function getPowerHouseRequestedPower() {
    const keys = ["phouseReq", "strategyRequestedPower"];
    for (const key of keys) {
      const numeric = getEntityNumericValue(key);
      if (!Number.isNaN(numeric)) {
        return numeric;
      }
    }
    return Number.NaN;
  }

  function getPowerHouseOverviewModel() {
    const requested = getPowerHouseRequestedPower();
    const house = getEntityNumericValue("phouseHouse");
    const delivered = getEntityNumericValue("totalHeat");
    const capacity = getEntityNumericValue("hpCapacity");
    const roomCorrection = Number.isNaN(requested) || Number.isNaN(house) ? Number.NaN : requested - house;

    let statusTitle = "Nog aan het opbouwen";
    let statusCopy = "Zodra alle vermogens beschikbaar zijn, zie je hier hoe de warmtevraag is opgebouwd.";

    if (!Number.isNaN(requested) && !Number.isNaN(capacity) && requested > capacity + 150) {
      statusTitle = "Capaciteit begrenst";
      statusCopy = "De gevraagde warmtevraag ligt boven wat de warmtepomp nu ongeveer kan leveren.";
    } else if (!Number.isNaN(requested) && !Number.isNaN(delivered) && delivered < requested - 250) {
      statusTitle = "Levert minder dan gevraagd";
      statusCopy = "De actuele warmteafgifte blijft nog onder de gevraagde warmtevraag.";
    } else if (!Number.isNaN(requested) && !Number.isNaN(delivered) && delivered > requested + 250) {
      statusTitle = "Levert meer dan gevraagd";
      statusCopy = "De actuele warmteafgifte ligt nu boven de gevraagde warmtevraag.";
    } else if (!Number.isNaN(requested) && !Number.isNaN(delivered)) {
      statusTitle = "In balans";
      statusCopy = "Gevraagde warmtevraag en actuele levering liggen nu dicht bij elkaar.";
    }

    return {
      requestedText: formatNumericState(requested, 0, "W"),
      houseText: formatNumericState(house, 0, "W"),
      correctionText: formatSignedPower(roomCorrection),
      capacityText: formatOverviewStatValue("hpCapacity"),
      statusTitle,
      statusCopy,
    };
  }

  function getCurveOverviewModel() {
    const target = getEntityNumericValue("curveSupplyTarget");
    const supply = getEntityNumericValue("supplyTemp");
    const outsideKey = getOverviewOutsideTempKey();
    const outside = outsideKey ? getEntityNumericValue(outsideKey) : Number.NaN;
    const targetDelta = Number.isNaN(target) || Number.isNaN(supply) ? Number.NaN : supply - target;
    const fallbackActive = Boolean(outsideKey) && Number.isNaN(outside);

    let statusTitle = "Stuurt op buitentemperatuur";
    let statusCopy = "De doelaanvoer volgt de huidige buitentemperatuur en vergelijkt die met de actuele aanvoer.";

    if (fallbackActive) {
      statusTitle = "Fallback actief";
      statusCopy = "De buitentemperatuur ontbreekt, dus de regeling valt terug op de ingestelde fallback-aanvoer.";
    } else if (!Number.isNaN(targetDelta) && targetDelta < -1.0) {
      statusTitle = "Nog onder doel";
      statusCopy = "De actuele aanvoertemperatuur ligt nog onder de doelaanvoer.";
    } else if (!Number.isNaN(targetDelta) && targetDelta > 1.0) {
      statusTitle = "Boven doel";
      statusCopy = "De actuele aanvoertemperatuur ligt nu boven de doelaanvoer.";
    } else if (!Number.isNaN(targetDelta)) {
      statusTitle = "Dicht bij doel";
      statusCopy = "De actuele aanvoertemperatuur sluit nu goed aan op de doelaanvoer.";
    }

    return {
      targetText: formatOverviewStatValue("curveSupplyTarget"),
      supplyText: formatOverviewStatValue("supplyTemp"),
      deltaText: formatSignedTemperature(targetDelta),
      capacityText: formatOverviewStatValue("hpCapacity"),
      statusTitle,
      statusCopy,
    };
  }

  function getCoolingOverviewModel() {
    const target = getEntityNumericValue("coolingSupplyTarget");
    const supply = getEntityNumericValue("supplyTemp");
    const safeFloor = getEntityNumericValue("coolingEffectiveMinSupplyTemp");
    const dewPoint = getEntityNumericValue("coolingDewPointSelected");
    const guardMode = getEntityStateText("coolingGuardMode", "");
    const fallbackNightMin = getEntityStateText("coolingFallbackNightMinOutdoorTemp", "—");
    const supplyError = getEntityNumericValue("coolingSupplyError");
    const rawDemand = getEntityNumericValue("coolingDemandRaw");
    const permitted = isEntityActive("coolingPermitted");
    const requestActive = isEntityActive("coolingRequestActive");
    const blockReason = getEntityStateText("coolingBlockReason", "Onbekend");

    let statusTitle = "Wacht op koelvraag";
    let statusCopy = "Zodra er koelvraag is, zie je hier hoe de regeling de aanvoer richting het koeldoel stuurt.";

    if (!permitted) {
      statusTitle = "Koeling geblokkeerd";
      statusCopy = `Blokkade: ${blockReason}.`;
    } else if (!requestActive) {
      statusTitle = "Koeling gereed";
      statusCopy = "Koeling is toegestaan, maar wacht nog op actieve koelvraag vanuit de kamerregeling.";
    } else if (!Number.isNaN(rawDemand) && rawDemand <= 0.0) {
      statusTitle = "Houdt doel vast";
      statusCopy = "De koelvraag loopt nog, maar de compressor hoeft nu niet harder te werken.";
    } else if (!Number.isNaN(supplyError) && supplyError > 1.0) {
      statusTitle = "Trekt aanvoer omlaag";
      statusCopy = "De actuele aanvoertemperatuur ligt nog ruim boven het koeldoel.";
    } else if (!Number.isNaN(supplyError) && supplyError > 0.2) {
      statusTitle = "Benadert koeldoel";
      statusCopy = "De regeling koelt nog door, maar zit al dicht bij de gewenste aanvoertemperatuur.";
    } else if (!Number.isNaN(supplyError)) {
      statusTitle = "Koelt rustig door";
      statusCopy = "De aanvoertemperatuur zit dicht bij het koeldoel en de regeling werkt nu op laag pitje.";
    }

    return {
      targetText: formatOverviewStatValue("coolingSupplyTarget"),
      supplyText: formatOverviewStatValue("supplyTemp"),
      safeFloorText: formatOverviewStatValue("coolingEffectiveMinSupplyTemp"),
      dewPointText: formatOverviewStatValue("coolingDewPointSelected"),
      guardMode,
      fallbackNightMin,
      demandText: formatOverviewStatValue("coolingDemandRaw"),
      deltaText: formatSignedTemperature(supplyError),
      statusTitle,
      statusCopy,
      permitted,
      requestActive,
      blockReason,
    };
  }

  function renderPowerHouseOverviewCard() {
    const model = getPowerHouseOverviewModel();

    return `
      <section class="oq-overview-system">
        <div class="oq-overview-system-copy">
          <h3>Vermogensbalans</h3>
          <p>Power House laat zien waar de warmtevraag nu vandaan komt en of de warmtepomp dat kan volgen.</p>
        </div>
        <div class="oq-overview-hero">
          <div class="oq-overview-hero-main">
            <span class="oq-overview-focus-label">Gevraagd vermogen</span>
            <strong>${escapeHtml(model.requestedText)}</strong>
            <p>De warmtevraag waar Power House nu naartoe stuurt.</p>
          </div>
        </div>
        <div class="oq-overview-metrics oq-overview-metrics--three-column">
          ${renderOverviewMetricCard("Berekende huisvraag", model.houseText, "blue", "Op basis van woning en buitentemperatuur.")}
          ${renderOverviewMetricCard("Kamercorrectie", model.correctionText, "orange", "Extra bijsturing rond setpoint.")}
          ${renderOverviewMetricCard("Beschikbare warmtecapaciteit", model.capacityText, "sky", "Bij huidige buitentemperatuur.")}
        </div>
      </section>
    `;
  }

  function renderCurveOverviewCard() {
    const model = getCurveOverviewModel();

    return `
      <section class="oq-overview-system">
        <div class="oq-overview-system-copy">
          <h3>Stooklijnregeling</h3>
          <p>De stooklijn laat zien op welke aanvoertemperatuur de regeling nu mikt en hoe dicht die al benaderd wordt.</p>
        </div>
        <div class="oq-overview-hero">
          <div class="oq-overview-hero-main">
            <span class="oq-overview-focus-label">Doelaanvoer</span>
            <strong>${escapeHtml(model.targetText)}</strong>
            <p>De aanvoertemperatuur waar de regeling nu naartoe werkt.</p>
          </div>
        </div>
        <div class="oq-overview-metrics oq-overview-metrics--three-column">
          ${renderOverviewMetricCard("Actuele aanvoertemperatuur", model.supplyText, "orange", "Wat nu wordt geleverd.")}
          ${renderOverviewMetricCard("Afwijking doelaanvoer", model.deltaText, "blue", "Verschil met het doel.")}
          ${renderOverviewMetricCard("Beschikbare warmtecapaciteit", model.capacityText, "sky", "Bij huidige buitentemperatuur.")}
        </div>
      </section>
    `;
  }

  function renderCoolingOverviewCard() {
    const model = getCoolingOverviewModel();
    const floorLabel = model.guardMode.toLowerCase().includes("fallback") ? "Fallback ondergrens" : "Veilige aanvoergrens";
    const floorCopy = model.guardMode.toLowerCase().includes("fallback")
      ? `Conservatieve ondergrens zonder dauwpuntmeting. Nachtminimum: ${model.fallbackNightMin}.`
      : "Dauwpunt plus veiligheidsmarge.";

    return `
      <section class="oq-overview-system">
        <div class="oq-overview-system-copy">
          <h3>Koelregeling</h3>
          <p>Koeling laat zien op welke aanvoertemperatuur de regeling nu mikt en hoe dicht die bij de veilige grens zit.</p>
        </div>
        <div class="oq-overview-hero">
          <div class="oq-overview-hero-main">
            <span class="oq-overview-focus-label">Koeldoel</span>
            <strong>${escapeHtml(model.targetText)}</strong>
            <p>${escapeHtml(model.statusCopy)}</p>
          </div>
        </div>
        <div class="oq-overview-metrics oq-overview-metrics--three-column">
          ${renderOverviewMetricCard("Actuele aanvoertemperatuur", model.supplyText, "orange", "Wat nu door het systeem loopt.")}
          ${renderOverviewMetricCard(floorLabel, model.safeFloorText, "blue", floorCopy)}
          ${renderOverviewMetricCard("Koelvraag", model.demandText, "sky", "De huidige koelvraag van de regelaar.")}
        </div>
      </section>
    `;
  }

  function renderOverviewStrategyPanel() {
    if (isCoolingOverviewActive()) {
      return renderCoolingOverviewCard();
    }
    return isCurveMode() ? renderCurveOverviewCard() : renderPowerHouseOverviewCard();
  }

  function getOverviewPrimarySignal() {
    if (isCoolingOverviewActive()) {
      const model = getCoolingOverviewModel();
      const tone = !model.permitted
        ? "orange"
        : model.statusTitle === "Koelt rustig door" || model.statusTitle === "Houdt temperatuur vast"
          ? "green"
          : model.statusTitle === "Koeling gereed"
            ? "neutral"
            : "sky";
      return {
        label: "Regeling nu",
        value: model.statusTitle,
        tone,
      };
    }
    if (isSystemInStandby()) {
      return {
        label: "Regeling nu",
        value: "Stand-by",
        tone: "neutral",
      };
    }
    const model = isCurveMode() ? getCurveOverviewModel() : getPowerHouseOverviewModel();
    const title = model.statusTitle;
    const tone = title === "In balans" || title === "Dicht bij doel"
      ? "green"
      : title === "Nog aan het opbouwen" || title === "Stuurt op buitentemperatuur"
        ? "neutral"
        : "orange";
    return {
      label: "Regeling nu",
      value: title,
      tone,
    };
  }

  function getOverviewDemandSignal() {
    if (isCoolingOverviewActive()) {
      if (!isEntityActive("coolingRequestActive")) {
        return {
          label: "Koelvraag",
          value: "Geen koelvraag",
          tone: "neutral",
        };
      }
      const rawDemand = getEntityNumericValue("coolingDemandRaw");
      const value = Number.isNaN(rawDemand)
        ? "Koelvraag actief"
        : rawDemand <= 0
          ? "Koelvraag actief, compressor rust"
          : "Koelvraag actief";
      return {
        label: "Koelvraag",
        value,
        tone: rawDemand > 0 ? "sky" : "neutral",
      };
    }
    if (isSystemInStandby()) {
      return {
        label: "Warmtevraag",
        value: "Geen warmtevraag",
        tone: "neutral",
      };
    }
    const demand = getHomeDemandState();
    const tone = demand.tone === "high" || demand.tone === "active"
      ? "orange"
      : demand.tone === "steady"
        ? "green"
        : "neutral";
    return {
      label: "Warmtevraag",
      value: demand.level,
      tone,
    };
  }

  function getOverviewSystemSignal() {
    if (isCoolingOverviewActive()) {
      if (!isEntityActive("coolingPermitted")) {
        return {
          label: "Systeem",
          value: getEntityStateText("coolingBlockReason", "Koeling geblokkeerd"),
          tone: "orange",
        };
      }
      if (isEntityActive("silentActive")) {
        return {
          label: "Systeem",
          value: "Stille uren actief",
          tone: "neutral",
        };
      }
      return {
        label: "Systeem",
        value: "Koeling toegestaan",
        tone: "green",
      };
    }
    if (isFirmwareUpdateAvailable()) {
      return {
        label: "Systeem",
        value: "Update beschikbaar",
        tone: "orange",
      };
    }
    if (isSystemInStandby()) {
      return {
        label: "Systeem",
        value: "Stand-by, gereed om te starten",
        tone: "sky",
      };
    }
    if (isEntityActive("silentActive")) {
      return {
        label: "Systeem",
        value: "Stille uren actief",
        tone: "neutral",
      };
    }
    if (isEntityActive("stickyActive")) {
      return {
        label: "Systeem",
        value: "Pompbescherming actief",
        tone: "neutral",
      };
    }
    return {
      label: "Systeem",
      value: "Alles draait normaal",
      tone: "green",
    };
  }

  function renderOverviewSignals() {
    const items = [
      getOverviewPrimarySignal(),
      getOverviewDemandSignal(),
      getOverviewSystemSignal(),
    ];
    return `
      <section class="oq-overview-signals">
        ${items.map((item) => `
          <article class="oq-overview-signal oq-overview-signal--${escapeHtml(item.tone)}">
            <span>${escapeHtml(item.label)}</span>
            <strong>${escapeHtml(item.value)}</strong>
          </article>
        `).join("")}
      </section>
    `;
  }

  function renderOverviewTopCards() {
    const coolingActive = isCoolingOverviewActive();
    const thermalLabel = coolingActive ? "Koelafgifte" : "Warmteafgifte";
    const thermalKey = coolingActive ? "totalCoolingPower" : "totalHeat";
    const efficiencyKey = coolingActive ? "totalEer" : "totalCop";
    const efficiencyLabel = coolingActive ? "EER" : "COP";
    return `
      ${renderOverviewStatCard("totalPower", "Stroomverbruik", "blue", "hele systeem")}
      ${renderOverviewStatCard(thermalKey, thermalLabel, "orange", "thermisch vermogen")}
      ${renderOverviewStatCard(efficiencyKey, efficiencyLabel, "green", "rendement")}
      ${renderOverviewStatCard("flowSelected", "Flow", "sky", "watercircuit")}
    `;
  }

  function renderOverviewTempsSection() {
    const outsideTempKey = getOverviewOutsideTempKey();
    const returnTempKey = getOverviewReturnTempKey();
    if (isCoolingOverviewActive()) {
      return `
        <div class="oq-overview-system-copy">
          <h3>Koeltemperaturen</h3>
          <p>De belangrijkste temperaturen voor koeldoel, dauwpuntveiligheid en comfort.</p>
        </div>
        <div class="oq-overview-temps-list">
          ${renderTempRow("Kamertemperatuur", "roomTemp")}
          ${renderTempRow("Kamer setpoint", "roomSetpoint")}
          ${renderTempRow("Aanvoertemperatuur", "supplyTemp")}
          ${renderTempRow("Koeldoel", "coolingSupplyTarget")}
          ${renderTempRow("Veilige aanvoergrens", "coolingMinimumSafeSupplyTemp")}
          ${renderTempRow("Dauwpunt", "coolingDewPointSelected")}
        </div>
      `;
    }
    return `
      <div class="oq-overview-system-copy">
        <h3>Temperaturen</h3>
        <p>De belangrijkste temperaturen voor comfort en regeling.</p>
      </div>
      <div class="oq-overview-temps-list">
        ${renderTempRow("Kamertemperatuur", "roomTemp")}
        ${renderTempRow("Kamer setpoint", "roomSetpoint")}
        ${renderTempRow("Aanvoertemperatuur", "supplyTemp")}
        ${returnTempKey ? renderTempRow("Retourtemperatuur", returnTempKey) : ""}
        ${outsideTempKey ? renderTempRow("Buitentemperatuur", outsideTempKey) : renderTempRow("Buitentemperatuur", "", "—")}
      </div>
    `;
  }

  function isSystemInStandby() {
    return getEntityStateText("controlModeLabel", "").toLowerCase().includes("standby");
  }

  function formatHeatPumpSummaryMode(mode, defrostActive) {
    if (defrostActive) {
      return "ontdooit";
    }
    if (mode === "Verwarmen") {
      return "verwarmt";
    }
    if (mode === "Koelen") {
      return "koelt";
    }
    if (mode === "Stand-by") {
      return "stand-by";
    }
    return "onbekend";
  }

  function renderHeatPumpSummary(heatPumpPanels) {
    if (!Array.isArray(heatPumpPanels) || heatPumpPanels.length === 0) {
      return "";
    }
    const summary = heatPumpPanels.map((panel) => {
      const mode = formatWorkingMode(getEntityStateText(panel.keys.mode, "Unknown"));
      const defrostActive = isEntityActive(panel.keys.defrost);
      return `${panel.title} ${formatHeatPumpSummaryMode(mode, defrostActive)}`;
    }).join(", ");
    return `<p class="oq-overview-hp-summary">${escapeHtml(summary)}</p>`;
  }

  function renderOverviewEnergyRow(label, key) {
    if (!hasEntity(key)) {
      return "";
    }
    return `
      <div class="oq-overview-energy-row">
        <span>${escapeHtml(label)}</span>
        <strong>${escapeHtml(getEntityStateText(key))}</strong>
      </div>
    `;
  }

  function renderOverviewEnergyGroup(title, rows) {
    const filledRows = rows.filter(Boolean).join("");
    if (!filledRows) {
      return "";
    }
    return `
      <section class="oq-overview-energy-group">
        <h5>${escapeHtml(title)}</h5>
        <div class="oq-overview-energy-rows">
          ${filledRows}
        </div>
      </section>
    `;
  }

  function renderOverviewEnergyCategory(title, tone, groups) {
    const filledGroups = groups.filter(Boolean).join("");
    if (!filledGroups) {
      return "";
    }
    return `
      <section class="oq-overview-energy-category oq-overview-energy-category--${escapeHtml(tone)}">
        <div class="oq-overview-energy-category-head">
          <span>${escapeHtml(title)}</span>
        </div>
        <div class="oq-overview-energy-category-groups">
          ${filledGroups}
        </div>
      </section>
    `;
  }

  function renderOverviewEnergyColumn(label, intro, groups, tone = "blue") {
    const filledGroups = groups.filter(Boolean).join("");
    if (!filledGroups) {
      return "";
    }
    const showLabel = label && intro && label !== intro;
    return `
      <article class="oq-overview-energy-column oq-overview-energy-column--${escapeHtml(tone)}">
        <div class="oq-overview-energy-column-copy">
          ${showLabel ? `<p>${escapeHtml(label)}</p>` : ""}
          <h4>${escapeHtml(intro)}</h4>
        </div>
        <div class="oq-overview-energy-groups">
          ${filledGroups}
        </div>
      </article>
    `;
  }

  function renderOverviewEnergySection() {
    const currentColumn = renderOverviewEnergyColumn("Nu", "Live energie", [
      renderOverviewEnergyCategory("Verwarmen", "orange", [
        renderOverviewEnergyGroup("Warmtepomp", [
          renderOverviewEnergyRow("Elektrisch vermogen", "heatingPowerInput"),
          renderOverviewEnergyRow("Warmteafgifte", "totalHeat"),
          renderOverviewEnergyRow("COP", "totalCop"),
        ]),
        renderOverviewEnergyGroup("CV-ketel", [
          renderOverviewEnergyRow("Warmteafgifte", "boilerHeatPower"),
        ]),
        renderOverviewEnergyGroup("Systeem", [
          renderOverviewEnergyRow("Warmteafgifte", "systemHeatPower"),
        ]),
      ]),
      renderOverviewEnergyCategory("Koelen", "blue", [
        renderOverviewEnergyGroup("Warmtepomp", [
          renderOverviewEnergyRow("Elektrisch vermogen", "coolingPowerInput"),
          renderOverviewEnergyRow("Koelafgifte", "totalCoolingPower"),
          renderOverviewEnergyRow("EER", "totalEer"),
        ]),
      ]),
    ], "blue");

    const dailyColumn = renderOverviewEnergyColumn("Vandaag", "Energie vandaag", [
      renderOverviewEnergyCategory("Verwarmen", "orange", [
        renderOverviewEnergyGroup("Warmtepomp", [
          renderOverviewEnergyRow("Elektriciteit", "heatingElectricalEnergyDaily"),
          renderOverviewEnergyRow("Warmte", "heatpumpThermalEnergyDaily"),
          renderOverviewEnergyRow("COP", "heatpumpCopDaily"),
        ]),
        renderOverviewEnergyGroup("CV-ketel", [
          renderOverviewEnergyRow("Warmte", "boilerThermalEnergyDaily"),
        ]),
        renderOverviewEnergyGroup("Systeem", [
          renderOverviewEnergyRow("Warmte", "systemThermalEnergyDaily"),
        ]),
      ]),
      renderOverviewEnergyCategory("Koelen", "blue", [
        renderOverviewEnergyGroup("Warmtepomp", [
          renderOverviewEnergyRow("Elektriciteit", "coolingElectricalEnergyDaily"),
          renderOverviewEnergyRow("Koeling", "heatpumpCoolingEnergyDaily"),
          renderOverviewEnergyRow("EER", "heatpumpEerDaily"),
        ]),
      ]),
    ], "orange");

    const cumulativeColumn = renderOverviewEnergyColumn("Cumulatief", "Tot nu toe", [
      renderOverviewEnergyCategory("Verwarmen", "orange", [
        renderOverviewEnergyGroup("Warmtepomp", [
          renderOverviewEnergyRow("Elektriciteit", "heatingElectricalEnergyCumulative"),
          renderOverviewEnergyRow("Warmte", "heatpumpThermalEnergyCumulative"),
          renderOverviewEnergyRow("COP", "heatpumpCopCumulative"),
        ]),
        renderOverviewEnergyGroup("CV-ketel", [
          renderOverviewEnergyRow("Warmte", "boilerThermalEnergyCumulative"),
        ]),
        renderOverviewEnergyGroup("Systeem", [
          renderOverviewEnergyRow("Warmte", "systemThermalEnergyCumulative"),
        ]),
      ]),
      renderOverviewEnergyCategory("Koelen", "blue", [
        renderOverviewEnergyGroup("Warmtepomp", [
          renderOverviewEnergyRow("Elektriciteit", "coolingElectricalEnergyCumulative"),
          renderOverviewEnergyRow("Koeling", "heatpumpCoolingEnergyCumulative"),
          renderOverviewEnergyRow("EER", "heatpumpEerCumulative"),
        ]),
      ]),
    ], "green");

    const columns = [currentColumn, dailyColumn, cumulativeColumn].filter(Boolean);
    if (!columns.length) {
      return "";
    }

    return `
      <section class="oq-overview-energy">
        <div class="oq-overview-system-copy">
          <h3>Energie</h3>
          <p>Bekijk hier verbruik, warmte of koeling en rendement voor nu, vandaag en cumulatief.</p>
        </div>
        <div class="oq-overview-energy-grid">
          ${columns.join("")}
        </div>
      </section>
    `;
  }

  function renderEnergyView() {
    const currentColumn = renderOverviewEnergyColumn("Nu", "Nu", [
      renderOverviewEnergyCategory("Verwarmen", "orange", [
        renderOverviewEnergyGroup("Warmtepomp", [
          renderOverviewEnergyRow("Elektrisch vermogen", "heatingPowerInput"),
          renderOverviewEnergyRow("Warmteafgifte", "totalHeat"),
          renderOverviewEnergyRow("COP", "totalCop"),
        ]),
        renderOverviewEnergyGroup("CV-ketel", [
          renderOverviewEnergyRow("Warmteafgifte", "boilerHeatPower"),
        ]),
        renderOverviewEnergyGroup("Systeem", [
          renderOverviewEnergyRow("Warmteafgifte", "systemHeatPower"),
        ]),
      ]),
      renderOverviewEnergyCategory("Koelen", "blue", [
        renderOverviewEnergyGroup("Warmtepomp", [
          renderOverviewEnergyRow("Elektrisch vermogen", "coolingPowerInput"),
          renderOverviewEnergyRow("Koelafgifte", "totalCoolingPower"),
          renderOverviewEnergyRow("EER", "totalEer"),
        ]),
      ]),
    ], "blue");

    const dailyColumn = renderOverviewEnergyColumn("Vandaag", "Vandaag", [
      renderOverviewEnergyCategory("Verwarmen", "orange", [
        renderOverviewEnergyGroup("Warmtepomp", [
          renderOverviewEnergyRow("Elektriciteit", "heatingElectricalEnergyDaily"),
          renderOverviewEnergyRow("Warmte", "heatpumpThermalEnergyDaily"),
          renderOverviewEnergyRow("COP", "heatpumpCopDaily"),
        ]),
        renderOverviewEnergyGroup("CV-ketel", [
          renderOverviewEnergyRow("Warmte", "boilerThermalEnergyDaily"),
        ]),
        renderOverviewEnergyGroup("Systeem", [
          renderOverviewEnergyRow("Warmte", "systemThermalEnergyDaily"),
        ]),
      ]),
      renderOverviewEnergyCategory("Koelen", "blue", [
        renderOverviewEnergyGroup("Warmtepomp", [
          renderOverviewEnergyRow("Elektriciteit", "coolingElectricalEnergyDaily"),
          renderOverviewEnergyRow("Koeling", "heatpumpCoolingEnergyDaily"),
          renderOverviewEnergyRow("EER", "heatpumpEerDaily"),
        ]),
      ]),
    ], "orange");

    const cumulativeColumn = renderOverviewEnergyColumn("Cumulatief", "Cumulatief", [
      renderOverviewEnergyCategory("Verwarmen", "orange", [
        renderOverviewEnergyGroup("Warmtepomp", [
          renderOverviewEnergyRow("Elektriciteit", "heatingElectricalEnergyCumulative"),
          renderOverviewEnergyRow("Warmte", "heatpumpThermalEnergyCumulative"),
          renderOverviewEnergyRow("COP", "heatpumpCopCumulative"),
        ]),
        renderOverviewEnergyGroup("CV-ketel", [
          renderOverviewEnergyRow("Warmte", "boilerThermalEnergyCumulative"),
        ]),
        renderOverviewEnergyGroup("Systeem", [
          renderOverviewEnergyRow("Warmte", "systemThermalEnergyCumulative"),
        ]),
      ]),
      renderOverviewEnergyCategory("Koelen", "blue", [
        renderOverviewEnergyGroup("Warmtepomp", [
          renderOverviewEnergyRow("Elektriciteit", "coolingElectricalEnergyCumulative"),
          renderOverviewEnergyRow("Koeling", "heatpumpCoolingEnergyCumulative"),
          renderOverviewEnergyRow("EER", "heatpumpEerCumulative"),
        ]),
      ]),
    ], "green");

    const columns = [currentColumn, dailyColumn, cumulativeColumn].filter(Boolean).join("");

    return `
      <section class="oq-helper-panel oq-helper-panel--flush">
        <div class="oq-overview-board oq-overview-board--${escapeHtml(state.overviewTheme)}">
          <div class="oq-overview-head">
          <div>
            <p class="oq-helper-label">Energie</p>
            <h2 class="oq-helper-section-title">Verbruik en rendement</h2>
            <p class="oq-helper-section-copy">Bekijk hier verbruik, warmte of koeling en rendement voor nu, vandaag en cumulatief.</p>
          </div>
          </div>
          <section class="oq-overview-energy oq-overview-energy--solo">
            <div class="oq-overview-energy-grid">
              ${columns}
            </div>
          </section>
        </div>
      </section>
    `;
  }

  function formatComponentPositionLabel(key) {
    const entity = state.entities[key];
    if (!entity) {
      return "Positie: â€”";
    }
    const numeric = getEntityNumericValue(key);
    if (!Number.isNaN(numeric)) {
      return `Positie: ${formatNumericState(numeric, 0, entity.uom || "")}`;
    }
    return `Positie: ${getEntityStateText(key)}`;
  }

  function formatFourWayPositionLabel(key) {
    if (!hasEntity(key)) {
      return "Positie: â€”";
    }
    return `Positie: ${isEntityActive(key) ? "Koelen/Defrost" : "Verwarmen"}`;
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

  function renderTechPipeLayer(id, tone, d, animated = true, flowVariant = "default") {
    return `
      <g class="oq-hp-tech-pipe oq-hp-tech-pipe--${escapeHtml(tone)}" data-oq-pipe="${escapeHtml(id)}">
        <path class="oq-hp-tech-pipe-base" d="${escapeHtml(d)}" />
        <path class="oq-hp-tech-pipe-core" d="${escapeHtml(d)}" />
        ${animated ? `<path class="oq-hp-tech-pipe-flow" data-oq-flow-variant="${escapeHtml(flowVariant)}" d="${escapeHtml(d)}" />` : ""}
      </g>
    `;
  }

  function renderTechTooltipIcon(icon, centerX, centerY) {
    if (icon === "temperature") {
      return `
        <svg
          class="oq-hp-tech-tooltip-icon-svg oq-hp-tech-tooltip-icon-svg--temperature"
          x="${centerX - 10}"
          y="${centerY - 10}"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path class="oq-hp-tech-tooltip-icon-mdi" d="M15 13V5A3 3 0 0 0 9 5V13A5 5 0 1 0 15 13M12 4A1 1 0 0 1 13 5V12H11V5A1 1 0 0 1 12 4Z" />
        </svg>
      `;
    }
    if (icon === "pressure") {
      return `
        <svg
          class="oq-hp-tech-tooltip-icon-svg oq-hp-tech-tooltip-icon-svg--component"
          x="${centerX - 10}"
          y="${centerY - 10}"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            class="oq-hp-tech-tooltip-icon-mdi"
            d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12C20,14.4 19,16.5 17.3,18C15.9,16.7 14,16 12,16C10,16 8.2,16.7 6.7,18C5,16.5 4,14.4 4,12A8,8 0 0,1 12,4M14,5.89C13.62,5.9 13.26,6.15 13.1,6.54L11.81,9.77L11.71,10C11,10.13 10.41,10.6 10.14,11.26C9.73,12.29 10.23,13.45 11.26,13.86C12.29,14.27 13.45,13.77 13.86,12.74C14.12,12.08 14,11.32 13.57,10.76L13.67,10.5L14.96,7.29L14.97,7.26C15.17,6.75 14.92,6.17 14.41,5.96C14.28,5.91 14.15,5.89 14,5.89M10,6A1,1 0 0,0 9,7A1,1 0 0,0 10,8A1,1 0 0,0 11,7A1,1 0 0,0 10,6M7,9A1,1 0 0,0 6,10A1,1 0 0,0 7,11A1,1 0 0,0 8,10A1,1 0 0,0 7,9M17,9A1,1 0 0,0 16,10A1,1 0 0,0 17,11A1,1 0 0,0 18,10A1,1 0 0,0 17,9Z"
          />
        </svg>
      `;
    }
    if (icon === "defrost") {
      return `
        <svg
          class="oq-hp-tech-tooltip-icon-svg oq-hp-tech-tooltip-icon-svg--component"
          x="${centerX - 10}"
          y="${centerY - 10}"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            class="oq-hp-tech-tooltip-icon-mdi"
            d="M8 17.85C8 19.04 7.11 20 6 20S4 19.04 4 17.85C4 16.42 6 14 6 14S8 16.42 8 17.85M16.46 12V10.56L18.46 9.43L20.79 10.05L21.31 8.12L19.54 7.65L20 5.88L18.07 5.36L17.45 7.69L15.45 8.82L13 7.38V5.12L14.71 3.41L13.29 2L12 3.29L10.71 2L9.29 3.41L11 5.12V7.38L8.5 8.82L6.5 7.69L5.92 5.36L4 5.88L4.47 7.65L2.7 8.12L3.22 10.05L5.55 9.43L7.55 10.56V12H2V13H22V12H16.46M9.5 12V10.56L12 9.11L14.5 10.56V12H9.5M20 17.85C20 19.04 19.11 20 18 20S16 19.04 16 17.85C16 16.42 18 14 18 14S20 16.42 20 17.85M14 20.85C14 22.04 13.11 23 12 23S10 22.04 10 20.85C10 19.42 12 17 12 17S14 19.42 14 20.85Z"
          />
        </svg>
      `;
    }
    if (icon === "flow") {
      return `
        <svg
          class="oq-hp-tech-tooltip-icon-svg oq-hp-tech-tooltip-icon-svg--component"
          x="${centerX - 10}"
          y="${centerY - 10}"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path class="oq-hp-tech-tooltip-icon-stroke" d="M3.5 8.2 C5.1 6.8 6.8 6.8 8.4 8.2 C10 9.6 11.7 9.6 13.3 8.2 C14.4 7.2 15.6 7 16.5 7.1" />
          <path class="oq-hp-tech-tooltip-icon-stroke" d="M3.5 12.1 C5.1 10.7 6.8 10.7 8.4 12.1 C10 13.5 11.7 13.5 13.3 12.1 C14.4 11.1 15.6 10.9 16.5 11" />
        </svg>
      `;
    }
    if (icon === "fan") {
      return `
        <svg
          class="oq-hp-tech-tooltip-icon-svg oq-hp-tech-tooltip-icon-svg--component"
          x="${centerX - 10}"
          y="${centerY - 10}"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <circle class="oq-hp-tech-tooltip-icon-fill" cx="10" cy="10" r="1.7" />
          <path class="oq-hp-tech-tooltip-icon-fill" d="M10 3.1 C12.1 5 12.4 6.7 10.9 9.1 C9 8.9 8.1 7.7 8.2 6.1 C8.3 4.7 8.9 3.7 10 3.1 Z" />
          <path class="oq-hp-tech-tooltip-icon-fill" d="M16.9 10 C15 12.1 13.3 12.4 10.9 10.9 C11.1 9 12.3 8.1 13.9 8.2 C15.3 8.3 16.3 8.9 16.9 10 Z" />
          <path class="oq-hp-tech-tooltip-icon-fill" d="M10 16.9 C7.9 15 7.6 13.3 9.1 10.9 C11 11.1 11.9 12.3 11.8 13.9 C11.7 15.3 11.1 16.3 10 16.9 Z" />
          <path class="oq-hp-tech-tooltip-icon-fill" d="M3.1 10 C5 7.9 6.7 7.6 9.1 9.1 C8.9 11 7.7 11.9 6.1 11.8 C4.7 11.7 3.7 11.1 3.1 10 Z" />
        </svg>
      `;
    }
    if (icon === "eev") {
      return `
        <svg
          class="oq-hp-tech-tooltip-icon-svg oq-hp-tech-tooltip-icon-svg--component"
          x="${centerX - 10}"
          y="${centerY - 10}"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <polygon class="oq-hp-tech-tooltip-icon-fill" points="4.5,5.1 10,10 4.5,14.9" />
          <polygon class="oq-hp-tech-tooltip-icon-fill" points="15.5,5.1 10,10 15.5,14.9" />
        </svg>
      `;
    }
    if (icon === "fourway") {
      return `
        <svg
          class="oq-hp-tech-tooltip-icon-svg oq-hp-tech-tooltip-icon-svg--component"
          x="${centerX - 10}"
          y="${centerY - 10}"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <rect class="oq-hp-tech-tooltip-icon-stroke" x="7" y="7" width="6" height="6" rx="1.8" />
          <path class="oq-hp-tech-tooltip-icon-stroke" d="M10 3.5 V7 M10 13 V16.5 M3.5 10 H7 M13 10 H16.5" />
          <circle class="oq-hp-tech-tooltip-icon-fill" cx="10" cy="10" r="1.5" />
        </svg>
      `;
    }
    return `
      <g class="oq-hp-tech-tooltip-icon-wrap" transform="translate(${centerX - 10} ${centerY - 10})">
        <path class="oq-hp-tech-tooltip-icon-wave" d="M2 15 L7 9 L12 15 L17 9" />
      </g>
    `;
  }

  function renderTechTooltip({ bind, modifier, x, y, width, kicker, detail, detailBind = "", icon = "heater", direction = "down" }) {
    const height = 44;
    const badgeCx = x + 26;
    const badgeCy = y + 22;
    const detailBindAttr = detailBind ? ` data-oq-bind="${escapeHtml(detailBind)}"` : "";
    let pointerPath = "";
    if (direction === "up") {
      const pointerMid = x + Math.round(width * 0.52);
      pointerPath = `M${pointerMid - 6} ${y} L${pointerMid} ${y - 8} L${pointerMid + 6} ${y} Z`;
    } else if (direction === "left") {
      const pointerMid = y + Math.round(height * 0.5);
      pointerPath = `M${x} ${pointerMid - 6} L${x - 8} ${pointerMid} L${x} ${pointerMid + 6} Z`;
    } else if (direction === "right") {
      const pointerMid = y + Math.round(height * 0.5);
      pointerPath = `M${x + width} ${pointerMid - 6} L${x + width + 8} ${pointerMid} L${x + width} ${pointerMid + 6} Z`;
    } else {
      const pointerMid = x + Math.round(width * 0.52);
      pointerPath = `M${pointerMid - 6} ${y + height} L${pointerMid} ${y + height + 8} L${pointerMid + 6} ${y + height} Z`;
    }
    return `
      <g
        class="oq-hp-tech-tooltip oq-hp-tech-tooltip--${escapeHtml(modifier)}"
        data-oq-bind="${escapeHtml(bind)}-tooltip"
        aria-hidden="true"
      >
        <rect class="oq-hp-tech-tooltip-panel" x="${x}" y="${y}" width="${width}" height="${height}" rx="12" />
        <circle class="oq-hp-tech-tooltip-accent" cx="${badgeCx}" cy="${badgeCy}" r="11.5" />
        ${renderTechTooltipIcon(icon, badgeCx, badgeCy)}
        <text class="oq-hp-tech-tooltip-kicker" x="${x + 48}" y="${y + 16}">${escapeHtml(kicker)}</text>
        <text class="oq-hp-tech-tooltip-detail" x="${x + 48}" y="${y + 32}"${detailBindAttr}>${escapeHtml(detail)}</text>
        <path class="oq-hp-tech-tooltip-pointer" d="${pointerPath}" />
      </g>
    `;
  }

  function renderTechWaterReading({ bind, x, y, width, value, label, ariaLabel = "", align = "start" }) {
    const resolvedAriaLabel = ariaLabel || `${label} temperatuur ${value}`;
    const isEndAligned = align === "end";
    const isCenterAligned = align === "center";
    const textAnchor = isCenterAligned ? "middle" : isEndAligned ? "end" : "start";
    const textX = isCenterAligned ? x + (width / 2) : isEndAligned ? x + width - 2 : x + 2;
    return `
      <g
        class="oq-hp-tech-water-reading"
        data-oq-bind="${escapeHtml(bind)}-reading"
        data-oq-tooltip-target="${escapeHtml(bind)}"
        tabindex="0"
        aria-label="${escapeHtml(resolvedAriaLabel)}"
      >
        <rect class="oq-hp-tech-water-reading-hit" x="${x}" y="${y}" width="${width}" height="18" rx="9" fill="rgba(255,255,255,0.001)" stroke="none" />
        <text class="oq-hp-tech-water-reading-value" x="${textX}" y="${y + 13}" text-anchor="${textAnchor}" data-oq-bind="${escapeHtml(bind)}-value">${escapeHtml(value)}</text>
      </g>
    `;
  }

  function buildHeatPumpSchematicModel(title, keys, accent, mode, defrostActive, failures, running) {
    const freqValue = getEntityNumericValue(keys.freq);
    const freqText = Number.isNaN(freqValue) ? "—" : String(Math.round(freqValue));
    const powerValue = getEntityNumericValue(keys.power);
    const heatValue = getEntityNumericValue(keys.heat);
    const coolingValue = getEntityNumericValue(keys.cooling);
    const thermalValue = mode === "Koelen" ? coolingValue : heatValue;
    const animated = running || (!Number.isNaN(freqValue) && freqValue > 0) || (!Number.isNaN(powerValue) && powerValue > 80) || (!Number.isNaN(heatValue) && heatValue > 150);
    const statusText = getHeatPumpPanelStatusLabel(mode, animated);
    const failureText = failures === "Geen actieve storingen" ? "Geen storingen" : failures;
    const warningActive = failureText !== "Geen storingen";
    const defrostText = defrostActive ? "Actief" : "Uit";
    const waterOutText = getEntityStateText(keys.waterOut);
    const waterInText = getEntityStateText(keys.waterIn);
    const flowText = getEntityStateText(keys.flow);
    const evaporatorCoilTempText = getEntityStateText(keys.evaporatorCoilTemp);
    const innerCoilTempText = getEntityStateText(keys.innerCoilTemp);
    const outsideTempText = getEntityStateText(keys.outsideTemp);
    const dischargePressureText = getEntityStateText(keys.condenserPressure);
    const dischargeTempText = getEntityStateText(keys.dischargeTemp);
    const suctionPressureText = getEntityStateText(keys.evaporatorPressure);
    const suctionTempText = getEntityStateText(keys.returnTemp);
    const bottomPlateActive = isEntityActive(keys.bottomPlate);
    const crankcaseActive = isEntityActive(keys.crankcase);
    const eevPositionText = formatComponentPositionLabel(keys.eev);
    const fourWayPositionText = formatFourWayPositionLabel(keys.fourWay);
    const powerText = formatNumericState(powerValue, 0, "W");
    const heatText = formatNumericState(thermalValue, 0, "W");
    const efficiencyValue = mode === "Koelen"
      ? ((!Number.isNaN(powerValue) && powerValue >= 5.0 && !Number.isNaN(coolingValue)) ? (coolingValue / powerValue) : Number.NaN)
      : getEntityNumericValue(keys.cop);
    const efficiencyText = formatNumericState(efficiencyValue, 1);
    const efficiencyLabel = mode === "Koelen" ? "EER" : "COP";
    const heatLabel = mode === "Koelen" ? "Koelafgifte" : "Warmteafgifte";
    const heatDescription = mode === "Koelen" ? "afgegeven koeling" : "afgegeven warmte";
    const fanRpmValue = getEntityNumericValue(keys.fanSpeed);
    const fanRunning = !Number.isNaN(fanRpmValue) && fanRpmValue > 0;
    const fanRpmText = Number.isNaN(fanRpmValue)
      ? "—"
      : `${Math.round(fanRpmValue)} rpm`;
    const reverseCycle = defrostActive || mode === "Koelen";
    const leftExchangerTitle = reverseCycle ? "Verdamper" : "Condensor";
    const rightExchangerTitle = reverseCycle ? "Condensor" : "Verdamper";
    const supplyLineTone = reverseCycle ? "return" : "supply";
    const returnLineTone = reverseCycle ? "supply" : "return";
    const lineJumpLeft = 360;
    const lineJumpRight = 384;
    const lineJumpPeakY = 214;
    const hotgasValveHeat = "M278 220 C278 228 273 234 266 234";
    const hotgasValveCool = "M278 220 C278 228 283 234 290 234";
    const suctionValveHeat = "M290 234 C284 234 279 240 278 248";
    const suctionValveCool = "M266 234 C272 234 277 240 278 248";
    const hotgasExternal = reverseCycle
      ? `M290 234 H${lineJumpLeft} Q372 ${lineJumpPeakY} ${lineJumpRight} 234 H436 V134 H480`
      : "M266 234 H180 V134 H164";
    const suctionExternal = reverseCycle
      ? "M164 134 H180 V234 H266"
      : `M480 134 H436 V234 H${lineJumpRight} Q372 ${lineJumpPeakY} ${lineJumpLeft} 234 H290`;
    const compressorDischarge = "M296 150 H278 V220";
    const compressorSuction = "M278 248 V268 H372 V150 H356";
    const liquidPath = reverseCycle ? "M480 294 H337" : "M164 294 H315";
    const expansionPath = reverseCycle ? "M315 294 H164" : "M337 294 H480";
    const boardClass = [
      "oq-hp-schematic-board",
      `oq-hp-schematic-board--${accent}`,
      animated ? "is-running" : "",
      fanRunning ? "is-fan-running" : "",
      reverseCycle ? "is-reversed" : "",
      defrostActive ? "is-defrost" : "",
    ].filter(Boolean).join(" ");

    return {
      title,
      boardClass,
      statusText,
      failureText,
      warningActive,
      defrostActive,
      defrostText,
      mode,
      reverseCycle,
      compressorFreqText: `${freqText} Hz`,
      leftExchangerTitle,
      rightExchangerTitle,
      supplyLineTone,
      returnLineTone,
      waterOutText,
      waterInText,
      flowText,
      evaporatorCoilTempText,
      innerCoilTempText,
      outsideTempText,
      dischargePressureText,
      dischargeTempText,
      suctionPressureText,
      suctionTempText,
      bottomPlateActive,
      crankcaseActive,
      eevPositionText,
      fourWayPositionText,
      powerText,
      heatText,
      heatLabel,
      heatDescription,
      efficiencyText,
      efficiencyLabel,
      fanRpmText,
      hotgasValveHeat,
      hotgasValveCool,
      suctionValveHeat,
      suctionValveCool,
      leftValveTone: reverseCycle ? "suction" : "hotgas",
      rightValveTone: reverseCycle ? "hotgas" : "suction",
      pipes: {
        supply: { tone: supplyLineTone, d: "M104 134 H18", animated: true, flowVariant: "water" },
        return: { tone: returnLineTone, d: "M18 294 H104", animated: true, flowVariant: "water" },
        compressorDischarge: { tone: "hotgas", d: compressorDischarge, animated: true, flowVariant: "default" },
        hotgasExternal: { tone: "hotgas", d: hotgasExternal, animated: true, flowVariant: "default" },
        liquid: { tone: "liquid", d: liquidPath, animated: true, flowVariant: "default" },
        expansion: { tone: "expansion", d: expansionPath, animated: true, flowVariant: "default" },
        suctionExternal: { tone: "suction", d: suctionExternal, animated: true, flowVariant: "default" },
        suctionCompressor: { tone: "suction", d: compressorSuction, animated: true, flowVariant: "default" },
      },
    };
  }

  function renderHeatPumpSchematic(model) {
    const svgIdBase = String(model.title || "hp").toLowerCase().replace(/[^a-z0-9]+/g, "-");
    const condWaterHeatGradientId = `${svgIdBase}-cond-water-heat`;
    const condWaterCoolGradientId = `${svgIdBase}-cond-water-cool`;
    const condRefGradientId = `${svgIdBase}-cond-ref`;
    const activeCondWaterGradientId = model.reverseCycle ? condWaterCoolGradientId : condWaterHeatGradientId;
    return `
      <div class="${escapeHtml(model.boardClass)}" data-oq-hp-board="${escapeHtml(model.title)}">
        <div class="oq-hp-tech-shell">
          <div class="oq-hp-tech-visual">
            <svg class="oq-hp-tech-svg" viewBox="0 0 620 360" role="img" aria-label="${escapeHtml(model.title)} technische schematic">
              <defs>
              <linearGradient id="${escapeHtml(condWaterHeatGradientId)}" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.92"></stop>
                <stop offset="18%" stop-color="#60a5fa" stop-opacity="0.82"></stop>
                <stop offset="50%" stop-color="#8b8fdb" stop-opacity="0.38"></stop>
                <stop offset="82%" stop-color="#f87171" stop-opacity="0.82"></stop>
                <stop offset="100%" stop-color="#ef4444" stop-opacity="0.92"></stop>
              </linearGradient>
              <linearGradient id="${escapeHtml(condWaterCoolGradientId)}" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stop-color="#ef4444" stop-opacity="0.92"></stop>
                <stop offset="18%" stop-color="#f87171" stop-opacity="0.82"></stop>
                <stop offset="50%" stop-color="#8b8fdb" stop-opacity="0.38"></stop>
                <stop offset="82%" stop-color="#60a5fa" stop-opacity="0.82"></stop>
                <stop offset="100%" stop-color="#3b82f6" stop-opacity="0.92"></stop>
              </linearGradient>
              <linearGradient id="${escapeHtml(condRefGradientId)}" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stop-color="#16a34a" stop-opacity="0.12"></stop>
                <stop offset="52%" stop-color="#86efac" stop-opacity="0.08"></stop>
                <stop offset="100%" stop-color="#4ade80" stop-opacity="0.22"></stop>
              </linearGradient>
              </defs>
              <rect class="oq-hp-tech-frame" x="18" y="28" width="584" height="314" rx="22" />

            <text class="oq-hp-tech-title" x="134" y="76" data-oq-bind="left-exchanger-title">${escapeHtml(model.leftExchangerTitle)}</text>
            <text class="oq-hp-tech-title" x="326" y="76">Compressor</text>
            <text class="oq-hp-tech-title" x="510" y="76" data-oq-bind="right-exchanger-title">${escapeHtml(model.rightExchangerTitle)}</text>

            <g class="oq-hp-tech-condensor">
              <rect class="oq-hp-tech-condensor-shell" x="104" y="118" width="60" height="192" rx="18" />
              <rect class="oq-hp-tech-condensor-water" x="112" y="124" width="20" height="180" rx="10" fill="url(#${escapeHtml(activeCondWaterGradientId)})" data-oq-bind="cond-water" />
              <rect class="oq-hp-tech-condensor-ref-column" x="136" y="124" width="20" height="180" rx="10" fill="url(#${escapeHtml(condRefGradientId)})" />
              <path class="oq-hp-tech-condensor-divider" d="M134 128 V300" />
            </g>

            <g class="oq-hp-tech-compressor">
              <rect class="oq-hp-tech-compressor-body" x="306" y="118" width="40" height="70" rx="17" />
              <rect class="oq-hp-tech-compressor-port" x="296" y="140" width="10" height="20" rx="5" />
              <rect class="oq-hp-tech-compressor-port" x="346" y="140" width="10" height="20" rx="5" />
              <path class="oq-hp-tech-compressor-lines" d="M316 134 H336 M316 148 H336 M316 162 H336" />
              <text class="oq-hp-tech-compressor-freq" x="326" y="166" data-oq-bind="compressor-freq">${escapeHtml(model.compressorFreqText)}</text>
            </g>

            <g class="oq-hp-tech-4way">
              <rect class="oq-hp-tech-4way-body" x="264" y="220" width="28" height="28" rx="9" />
              <rect class="oq-hp-tech-4way-actuator" x="259" y="229" width="5" height="10" rx="2.5" />
              <circle class="oq-hp-tech-4way-port oq-hp-tech-4way-port--${model.leftValveTone}" cx="266" cy="234" r="3.2" />
              <circle class="oq-hp-tech-4way-port oq-hp-tech-4way-port--hotgas" cx="278" cy="220" r="3.2" />
              <circle class="oq-hp-tech-4way-port oq-hp-tech-4way-port--${model.rightValveTone}" cx="290" cy="234" r="3.2" />
              <circle class="oq-hp-tech-4way-port oq-hp-tech-4way-port--suction" cx="278" cy="248" r="3.2" />
              <path class="oq-hp-tech-4way-route oq-hp-tech-4way-route--heat oq-hp-tech-4way-route--hotgas" d="${escapeHtml(model.hotgasValveHeat)}" />
              <path class="oq-hp-tech-4way-route oq-hp-tech-4way-route--heat oq-hp-tech-4way-route--suction" d="${escapeHtml(model.suctionValveHeat)}" />
              <path class="oq-hp-tech-4way-route oq-hp-tech-4way-route--cool oq-hp-tech-4way-route--hotgas" d="${escapeHtml(model.hotgasValveCool)}" />
              <path class="oq-hp-tech-4way-route oq-hp-tech-4way-route--cool oq-hp-tech-4way-route--suction" d="${escapeHtml(model.suctionValveCool)}" />
            </g>

            <g class="oq-hp-tech-valve">
              <rect class="oq-hp-tech-eev-mask" x="311" y="283" width="30" height="22" rx="4" />
              <polygon class="oq-hp-tech-eev-shape" points="315,284 326,294 315,304" />
              <polygon class="oq-hp-tech-eev-shape" points="337,284 326,294 337,304" />
            </g>

            <g class="oq-hp-tech-evaporator">
              <rect class="oq-hp-tech-evaporator-shell" x="480" y="118" width="60" height="192" rx="18" />
              <path class="oq-hp-tech-evaporator-lines" d="M492 130 H526 M492 142 H526 M492 154 H526 M492 166 H526 M492 178 H526 M492 190 H526 M492 202 H526 M492 214 H526 M492 226 H526 M492 238 H526 M492 250 H526 M492 262 H526 M492 274 H526 M492 286 H526 M492 298 H526" />
            </g>

            <g class="oq-hp-tech-fan">
              <circle class="oq-hp-tech-fan-ring" cx="550" cy="214" r="34" />
              <circle class="oq-hp-tech-fan-core" cx="550" cy="214" r="8" />
              <g class="oq-hp-tech-fan-blades">
                <path d="M550 180 C561 192 562 203 550 214 C538 203 539 192 550 180 Z" />
                <path d="M584 214 C572 225 561 226 550 214 C561 202 572 203 584 214 Z" />
                <path d="M550 248 C539 236 538 225 550 214 C562 225 561 236 550 248 Z" />
                <path d="M516 214 C528 203 539 202 550 214 C539 226 528 225 516 214 Z" />
              </g>
            </g>

            ${renderTechPipeLayer("supply", model.pipes.supply.tone, model.pipes.supply.d, model.pipes.supply.animated, model.pipes.supply.flowVariant)}
            ${renderTechPipeLayer("return", model.pipes.return.tone, model.pipes.return.d, model.pipes.return.animated, model.pipes.return.flowVariant)}
            ${renderTechPipeLayer("compressor-discharge", model.pipes.compressorDischarge.tone, model.pipes.compressorDischarge.d, model.pipes.compressorDischarge.animated, model.pipes.compressorDischarge.flowVariant)}
            ${renderTechPipeLayer("liquid", model.pipes.liquid.tone, model.pipes.liquid.d, model.pipes.liquid.animated, model.pipes.liquid.flowVariant)}
            ${renderTechPipeLayer("expansion", model.pipes.expansion.tone, model.pipes.expansion.d, model.pipes.expansion.animated, model.pipes.expansion.flowVariant)}
            ${renderTechPipeLayer("suction-compressor", model.pipes.suctionCompressor.tone, model.pipes.suctionCompressor.d, model.pipes.suctionCompressor.animated, model.pipes.suctionCompressor.flowVariant)}
            ${renderTechPipeLayer("hotgas-external", model.pipes.hotgasExternal.tone, model.pipes.hotgasExternal.d, model.pipes.hotgasExternal.animated, model.pipes.hotgasExternal.flowVariant)}
            ${renderTechPipeLayer("suction-external", model.pipes.suctionExternal.tone, model.pipes.suctionExternal.d, model.pipes.suctionExternal.animated, model.pipes.suctionExternal.flowVariant)}

            <g class="oq-hp-tech-pump oq-hp-tech-pump--${model.returnLineTone}">
              <circle class="oq-hp-tech-pump-ring" cx="88" cy="294" r="16" />
              <circle class="oq-hp-tech-pump-core" cx="88" cy="294" r="3.5" />
              <path class="oq-hp-tech-pump-blade" d="M81 287 L96 294 L81 301 Z" />
            </g>

            ${renderTechWaterReading({
              bind: "flow",
              x: 52,
              y: 308,
              width: 72,
              value: model.flowText,
              label: "Flow",
              ariaLabel: `Flow ${model.flowText}`,
              align: "center",
            })}
            ${renderTechTooltip({
              bind: "flow",
              modifier: model.returnLineTone,
              icon: "flow",
              x: 110,
              y: 276,
              width: 126,
              kicker: "Flow",
              detail: "CV-circuit",
              direction: "left",
            })}

            ${renderTechWaterReading({
              bind: "discharge-pressure",
              x: 218,
              y: 138,
              width: 50,
              value: model.dischargePressureText,
              label: "Persdruk",
              ariaLabel: `Persdruk ${model.dischargePressureText}`,
              align: "end",
            })}
            ${renderTechTooltip({
              bind: "discharge-pressure",
              modifier: "warm",
              icon: "pressure",
              x: 82,
              y: 120,
              width: 118,
              kicker: "Druk",
              detail: "Perszijde",
              direction: "right",
            })}

            ${renderTechWaterReading({
              bind: "discharge-temp",
              x: 218,
              y: 166,
              width: 50,
              value: model.dischargeTempText,
              label: "Perstemperatuur",
              ariaLabel: `Perstemperatuur ${model.dischargeTempText}`,
              align: "end",
            })}
            ${renderTechTooltip({
              bind: "discharge-temp",
              modifier: "warm",
              icon: "temperature",
              x: 80,
              y: 174,
              width: 142,
              kicker: "Temperatuur",
              detail: "Perszijde",
              direction: "right",
            })}

            ${renderTechWaterReading({
              bind: "suction-pressure",
              x: 378,
              y: 138,
              width: 50,
              value: model.suctionPressureText,
              label: "Zuigdruk",
              ariaLabel: `Zuigdruk ${model.suctionPressureText}`,
            })}
            ${renderTechTooltip({
              bind: "suction-pressure",
              modifier: "component",
              icon: "pressure",
              x: 438,
              y: 120,
              width: 118,
              kicker: "Druk",
              detail: "Zuigzijde",
              direction: "left",
            })}

            ${renderTechWaterReading({
              bind: "suction-temp",
              x: 378,
              y: 166,
              width: 50,
              value: model.suctionTempText,
              label: "Zuigtemperatuur",
              ariaLabel: `Zuigtemperatuur ${model.suctionTempText}`,
            })}
            ${renderTechTooltip({
              bind: "suction-temp",
              modifier: "component",
              icon: "temperature",
              x: 414,
              y: 174,
              width: 142,
              kicker: "Temperatuur",
              detail: "Zuigzijde",
              direction: "left",
            })}

            ${renderTechWaterReading({
              bind: "inner-coil-temp",
              x: 120,
              y: 166,
              width: 52,
              value: model.innerCoilTempText,
              label: "Inner coil temperatuur",
              ariaLabel: `Inner coil temperatuur ${model.innerCoilTempText}`,
              align: "center",
            })}
            ${renderTechTooltip({
              bind: "inner-coil-temp",
              modifier: "component",
              icon: "temperature",
              x: 174,
              y: 148,
              width: 132,
              kicker: "Temperatuur",
              detail: "Condensor",
              direction: "right",
            })}

            ${renderTechWaterReading({
              bind: "evaporator-temp",
              x: 484,
              y: 166,
              width: 52,
              value: model.evaporatorCoilTempText,
              label: "Verdampertemperatuur",
              ariaLabel: `Verdampertemperatuur ${model.evaporatorCoilTempText}`,
              align: "center",
            })}
            ${renderTechTooltip({
              bind: "evaporator-temp",
              modifier: "component",
              icon: "temperature",
              x: 344,
              y: 148,
              width: 132,
              kicker: "Temperatuur",
              detail: "Verdamper",
              direction: "right",
            })}

            ${renderTechWaterReading({
              bind: "outside-temp",
              x: 548,
              y: 110,
              width: 48,
              value: model.outsideTempText,
              label: "Buitentemperatuur",
              ariaLabel: `Buitentemperatuur ${model.outsideTempText}`,
              align: "center",
            })}
            ${renderTechTooltip({
              bind: "outside-temp",
              modifier: "component",
              icon: "temperature",
              x: 424,
              y: 92,
              width: 136,
              kicker: "Temperatuur",
              detail: "Buitenlucht",
              direction: "right",
            })}

            ${renderTechWaterReading({
              bind: "fan-speed",
              x: 520,
              y: 258,
              width: 60,
              value: model.fanRpmText,
              label: "Ventilatorsnelheid",
              ariaLabel: `Ventilatorsnelheid ${model.fanRpmText}`,
              align: "center",
            })}
            ${renderTechTooltip({
              bind: "fan-speed",
              modifier: "component",
              icon: "fan",
              x: 410,
              y: 236,
              width: 118,
              kicker: "Ventilator",
              detail: "Toerental",
              direction: "right",
            })}

            ${renderTechWaterReading({
              bind: "supply",
              x: 22,
              y: 114,
              width: 58,
              value: model.waterOutText,
              label: "Aanvoer",
            })}
            ${renderTechTooltip({
              bind: "supply",
              modifier: model.supplyLineTone,
              icon: "temperature",
              x: 96,
              y: 96,
              width: 124,
              kicker: "Temperatuur",
              detail: "Aanvoer",
              direction: "left",
            })}

            ${renderTechWaterReading({
              bind: "return",
              x: 22,
              y: 274,
              width: 58,
              value: model.waterInText,
              label: "Retour",
            })}
            ${renderTechTooltip({
              bind: "return",
              modifier: model.returnLineTone,
              icon: "temperature",
              x: 96,
              y: 252,
              width: 124,
              kicker: "Temperatuur",
              detail: "Retour",
              direction: "left",
            })}

            <g
              class="oq-hp-tech-bottom-heater ${model.bottomPlateActive ? "is-active" : ""}"
              data-oq-bind="bottom-heater"
              data-oq-tooltip-target="bottom-heater"
              tabindex="${model.bottomPlateActive ? "0" : "-1"}"
              aria-label="Bottom plate heater actief"
            >
              <path class="oq-hp-tech-bottom-heater-glow" d="M475 320 L485 314 L495 320 L505 314 L515 320 L525 314 L535 320 L545 314" />
              <path class="oq-hp-tech-bottom-heater-core" d="M475 320 L485 314 L495 320 L505 314 L515 320 L525 314 L535 320 L545 314" />
            </g>
            ${renderTechTooltip({
              bind: "bottom-heater",
              modifier: "warm",
              x: 372,
              y: 269,
              width: 210,
              kicker: "Verwarming",
              detail: "Bodemplaatverwarming aan",
            })}

            <g
              class="oq-hp-tech-crankcase-heater ${model.crankcaseActive ? "is-active" : ""}"
              data-oq-bind="crankcase-heater"
              data-oq-tooltip-target="crankcase-heater"
              tabindex="${model.crankcaseActive ? "0" : "-1"}"
              aria-label="Crank case heater actief"
            >
              <path class="oq-hp-tech-crankcase-heater-glow" d="M302 194 L310 189 L318 194 L326 189 L334 194 L342 189 L350 194" />
              <path class="oq-hp-tech-crankcase-heater-core" d="M302 194 L310 189 L318 194 L326 189 L334 194 L342 189 L350 194" />
            </g>
            ${renderTechTooltip({
              bind: "crankcase-heater",
              modifier: "warm",
              x: 224,
              y: 142,
              width: 172,
              kicker: "Verwarming",
              detail: "Carterverwarming aan",
            })}

            <g
              class="oq-hp-tech-defrost-badge"
              data-oq-bind="defrost-badge"
              data-oq-tooltip-target="defrost-badge"
              transform="translate(532 288)"
              tabindex="${model.defrostActive ? "0" : "-1"}"
              aria-label="Defrost actief"
            >
              <circle class="oq-hp-tech-defrost-hit" cx="0" cy="0" r="12" />
              <g class="oq-hp-tech-defrost-icon">
                <path class="oq-hp-tech-defrost-glyph" d="M16.46 12V10.56L18.46 9.43L20.79 10.05L21.31 8.12L19.54 7.65L20 5.88L18.07 5.36L17.45 7.69L15.45 8.82L13 7.38V5.12L14.71 3.41L13.29 2L12 3.29L10.71 2L9.29 3.41L11 5.12V7.38L8.5 8.82L6.5 7.69L5.92 5.36L4 5.88L4.47 7.65L2.7 8.12L3.22 10.05L5.55 9.43L7.55 10.56V12H2V13H22V12H16.46M9.5 12V10.56L12 9.11L14.5 10.56V12H9.5" />
                <g class="oq-hp-tech-defrost-drips">
                  <path class="oq-hp-tech-defrost-drip oq-hp-tech-defrost-drip--left" d="M8 17.85C8 19.04 7.11 20 6 20S4 19.04 4 17.85C4 16.42 6 14 6 14S8 16.42 8 17.85Z" />
                  <path class="oq-hp-tech-defrost-drip oq-hp-tech-defrost-drip--right" d="M20 17.85C20 19.04 19.11 20 18 20S16 19.04 16 17.85C16 16.42 18 14 18 14S20 16.42 20 17.85Z" />
                  <path class="oq-hp-tech-defrost-drip oq-hp-tech-defrost-drip--center" d="M14 20.85C14 22.04 13.11 23 12 23S10 22.04 10 20.85C10 19.42 12 17 12 17S14 19.42 14 20.85Z" />
                </g>
                <g class="oq-hp-tech-defrost-mists">
                  <g transform="translate(6 20.45)">
                    <g class="oq-hp-tech-defrost-mist oq-hp-tech-defrost-mist--left">
                      <circle cx="0" cy="0" r="0.92" />
                      <circle cx="-1.18" cy="0.34" r="0.58" />
                      <circle cx="1.16" cy="0.38" r="0.54" />
                    </g>
                  </g>
                  <g transform="translate(12 23.4)">
                    <g class="oq-hp-tech-defrost-mist oq-hp-tech-defrost-mist--center">
                      <circle cx="0" cy="0" r="1.08" />
                      <circle cx="-1.42" cy="0.42" r="0.66" />
                      <circle cx="1.38" cy="0.46" r="0.62" />
                    </g>
                  </g>
                  <g transform="translate(18 20.45)">
                    <g class="oq-hp-tech-defrost-mist oq-hp-tech-defrost-mist--right">
                      <circle cx="0" cy="0" r="0.92" />
                      <circle cx="-1.16" cy="0.38" r="0.54" />
                      <circle cx="1.18" cy="0.34" r="0.58" />
                    </g>
                  </g>
                </g>
              </g>
            </g>
            ${renderTechTooltip({
              bind: "defrost-badge",
              modifier: "return",
              icon: "defrost",
              x: 398,
              y: 266,
              width: 118,
              kicker: "Defrost",
              detail: "Actief",
              direction: "left",
            })}

            <g
              class="oq-hp-tech-hotspot"
              data-oq-bind="compressor-freq-trigger"
              data-oq-tooltip-target="compressor-freq"
              tabindex="0"
              aria-label="${escapeHtml(`Compressorfrequentie ${model.compressorFreqText}`)}"
            >
              <rect class="oq-hp-tech-hotspot-hit" x="300" y="148" width="52" height="26" rx="12" />
            </g>
            ${renderTechTooltip({
              bind: "compressor-freq",
              modifier: "component",
              icon: "fan",
              x: 366,
              y: 130,
              width: 136,
              kicker: "Frequentie",
              detail: "Compressor",
              direction: "left",
            })}

            <g
              class="oq-hp-tech-hotspot"
              data-oq-bind="fourway-trigger"
              data-oq-tooltip-target="fourway"
              tabindex="0"
              aria-label="${escapeHtml(`4-wegklep, ${model.fourWayPositionText}`)}"
            >
              <rect class="oq-hp-tech-hotspot-hit" x="252" y="208" width="52" height="52" rx="16" />
            </g>
            ${renderTechTooltip({
              bind: "fourway",
              modifier: "component",
              icon: "fourway",
              x: 308,
              y: 198,
              width: 196,
              kicker: "4-wegklep",
              detail: model.fourWayPositionText,
              detailBind: "fourway-detail",
              direction: "left",
            })}

            <g
              class="oq-hp-tech-hotspot"
              data-oq-bind="eev-trigger"
              data-oq-tooltip-target="eev"
              tabindex="0"
              aria-label="${escapeHtml(`Expansieventiel, ${model.eevPositionText}`)}"
            >
              <rect class="oq-hp-tech-hotspot-hit" x="301" y="275" width="50" height="38" rx="12" />
            </g>
            ${renderTechTooltip({
              bind: "eev",
              modifier: "component",
              icon: "eev",
              x: 340,
              y: 252,
              width: 202,
              kicker: "Expansieventiel",
              detail: model.eevPositionText,
              detailBind: "eev-detail",
              direction: "left",
            })}

            </svg>
          </div>
          <div class="oq-hp-tech-footer">
            <div class="oq-hp-tech-footer-item">
              <span>Werkmodus</span>
              <strong data-oq-bind="footer-mode">${escapeHtml(model.mode)}</strong>
            </div>
            <div class="oq-hp-tech-footer-item">
              <span aria-label="Stroomverbruik">Stroom<br>verbruik</span>
              <strong data-oq-bind="footer-power">${escapeHtml(model.powerText)}</strong>
            </div>
            <div class="oq-hp-tech-footer-item">
              <span aria-label="${escapeHtml(model.heatLabel)}" data-oq-bind="footer-heat-label">${model.heatLabel === "Koelafgifte" ? "Koel<br>afgifte" : "Warmte<br>afgifte"}</span>
              <strong data-oq-bind="footer-heat">${escapeHtml(model.heatText)}</strong>
            </div>
            <div class="oq-hp-tech-footer-item">
              <span data-oq-bind="footer-efficiency-label">${escapeHtml(model.efficiencyLabel)}</span>
              <strong data-oq-bind="footer-efficiency">${escapeHtml(model.efficiencyText)}</strong>
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

  function renderHeatPumpPanel(title, keys, accent, emphasis = "normal", layoutAction = null) {
    if (!hasEntity(keys.power)) {
      return "";
    }
    const mode = formatWorkingMode(getEntityStateText(keys.mode, "Unknown"));
    const defrostActive = isEntityActive(keys.defrost);
    const failures = formatFailures(getEntityStateText(keys.failures, "None"));
    const running = mode === "Verwarmen" || mode === "Koelen" || defrostActive;
    const schematicModel = buildHeatPumpSchematicModel(title, keys, accent, mode, defrostActive, failures, running);
    const thermalKey = mode === "Koelen" ? keys.cooling : keys.heat;

    if (state.hpVisualMode === "schematic") {
      return `
        <section class="oq-overview-hp oq-overview-hp--${escapeHtml(accent)} oq-overview-hp--${escapeHtml(emphasis)}" data-oq-hp-panel="${escapeHtml(title)}">
          <div class="oq-overview-hp-head">
            <div class="oq-overview-hp-head-title">
              <h3>${escapeHtml(title)}</h3>
              ${layoutAction ? `<button class="oq-overview-hp-card-action" type="button" data-oq-action="select-hp-layout" data-hp-layout="${escapeHtml(layoutAction.layout)}">${renderMagnifyActionIcon(layoutAction.layout === "equal" ? "minus" : "plus")}<span>${escapeHtml(layoutAction.label)}</span></button>` : ""}
            </div>
            <div class="oq-overview-hp-head-side">
              <div class="oq-overview-hp-status">
                ${renderHpPanelStatusRow(mode, running, schematicModel.warningActive, schematicModel.failureText)}
              </div>
            </div>
          </div>
          ${renderHeatPumpSchematic(schematicModel)}
        </section>
      `;
    }

    return `
      <section class="oq-overview-hp oq-overview-hp--${escapeHtml(accent)} oq-overview-hp--${escapeHtml(emphasis)}" data-oq-hp-panel="${escapeHtml(title)}">
        <div class="oq-overview-hp-head">
          <div>
            <h3>${escapeHtml(title)}</h3>
          </div>
          <div class="oq-overview-hp-status">
            ${renderHpPanelStatusRow(mode, running, schematicModel.warningActive, schematicModel.failureText)}
          </div>
        </div>
        <div class="oq-overview-hp-stats">
          ${renderOverviewStatCard(keys.power, "Stroomverbruik", "blue", "elektrisch verbruik")}
          ${renderOverviewStatCard(thermalKey, schematicModel.heatLabel, "orange", schematicModel.heatDescription)}
          ${renderOverviewStatCardValue(schematicModel.efficiencyLabel, schematicModel.efficiencyText, "green", "actueel")}
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
        </div>
      </section>
    `;
  }

  function getHeatPumpPanels() {
    return HP_PANEL_CONFIGS.filter((panel) => hasEntity(panel.keys.power));
  }

  function getEffectiveHpLayoutMode(heatPumpPanels) {
    if (!Array.isArray(heatPumpPanels) || heatPumpPanels.length < 2 || state.hpVisualMode !== "schematic") {
      return "equal";
    }
    return state.hpLayoutMode === "focus-hp1" || state.hpLayoutMode === "focus-hp2" ? state.hpLayoutMode : "equal";
  }

  function getHeatPumpPanelEmphasis(index, heatPumpPanels, layoutMode) {
    if (!Array.isArray(heatPumpPanels) || heatPumpPanels.length < 2) {
      return "normal";
    }
    if (layoutMode === "focus-hp1") {
      return index === 0 ? "focus" : "muted";
    }
    if (layoutMode === "focus-hp2") {
      return index === 1 ? "focus" : "muted";
    }
    return "normal";
  }

  function getHeatPumpPanelLayoutAction(index, heatPumpPanels, layoutMode) {
    if (!Array.isArray(heatPumpPanels) || heatPumpPanels.length < 2 || state.hpVisualMode !== "schematic") {
      return null;
    }

    const emphasis = getHeatPumpPanelEmphasis(index, heatPumpPanels, layoutMode);
    if (emphasis === "focus") {
      return { layout: "equal", label: "Toon beide" };
    }

    return {
      layout: index === 0 ? "focus-hp1" : "focus-hp2",
      label: "Vergroot",
    };
  }

  function renderMagnifyActionIcon(kind = "plus") {
    const path = kind === "minus"
      ? 'M15.5,14H14.71L14.43,13.73C15.41,12.59 16,11.11 16,9.5A6.5,6.5 0 0,0 9.5,3A6.5,6.5 0 0,0 3,9.5A6.5,6.5 0 0,0 9.5,16C11.11,16 12.59,15.41 13.73,14.43L14,14.71V15.5L19,20.5L20.5,19L15.5,14M9.5,14C7,14 5,12 5,9.5C5,7 7,5 9.5,5C12,5 14,7 14,9.5C14,12 12,14 9.5,14M7,9H12V10H7V9Z'
      : 'M15.5,14L20.5,19L19,20.5L14,15.5V14.71L13.73,14.43C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.43,13.73L14.71,14H15.5M9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14M12,10H10V12H9V10H7V9H9V7H10V9H12V10Z';
    return `
      <svg class="oq-overview-hp-card-action-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="${path}" fill="currentColor"></path>
      </svg>
    `;
  }

  function renderHeatPumpControlsInner(heatPumpPanels) {
    if (!Array.isArray(heatPumpPanels) || heatPumpPanels.length === 0) {
      return "";
    }

    return `
      <div class="oq-overview-hp-tools-head">
        <div class="oq-overview-hp-tools-copy">
          <h3>Warmtepompen</h3>
          ${renderHeatPumpSummary(heatPumpPanels)}
        </div>
        <div class="oq-overview-hp-tool-switches">
          <button class="oq-overview-hp-tool-chip${state.hpVisualMode === "schematic" ? " is-active" : ""}" type="button" data-oq-action="select-hp-visual" data-hp-visual="schematic">Schematisch</button>
          <button class="oq-overview-hp-tool-chip${state.hpVisualMode === "compact" ? " is-active" : ""}" type="button" data-oq-action="select-hp-visual" data-hp-visual="compact">Compact</button>
        </div>
      </div>
    `;
  }

  function renderHeatPumpControls(heatPumpPanels) {
    const inner = renderHeatPumpControlsInner(heatPumpPanels);
    if (!inner) {
      return "";
    }
    return `<div class="oq-overview-hp-tools">${inner}</div>`;
  }

  function patchHeatPumpControls(hpTools, heatPumpPanels) {
    if (!hpTools) {
      return false;
    }

    const copy = hpTools.querySelector(".oq-overview-hp-tools-copy");
    const switches = hpTools.querySelector(".oq-overview-hp-tool-switches");
    const schematicButton = hpTools.querySelector('[data-hp-visual="schematic"]');
    const compactButton = hpTools.querySelector('[data-hp-visual="compact"]');

    if (!copy || !switches || !schematicButton || !compactButton) {
      setInnerHtmlIfChanged(hpTools, renderHeatPumpControlsInner(heatPumpPanels));
      return true;
    }

    setInnerHtmlIfChanged(copy, `
      <h3>Warmtepompen</h3>
      ${renderHeatPumpSummary(heatPumpPanels)}
    `);
    schematicButton.classList.toggle("is-active", state.hpVisualMode === "schematic");
    compactButton.classList.toggle("is-active", state.hpVisualMode === "compact");
    return true;
  }

  function renderOverviewView() {
    const strategyLabel = getOverviewStrategyLabel();
    const heatPumpPanels = getHeatPumpPanels();
    const hpLayoutMode = getEffectiveHpLayoutMode(heatPumpPanels);

    return `
      <section class="oq-helper-panel oq-helper-panel--flush">
        <div class="oq-overview-board oq-overview-board--${escapeHtml(state.overviewTheme)}">
          <div class="oq-overview-head">
            <div>
              <p class="oq-helper-label">Overzicht</p>
              <h2 class="oq-helper-section-title">Live regeling</h2>
              <p class="oq-helper-section-copy">Hier zie je in één oogopslag hoe OpenQuatt nu werkt.</p>
            </div>
            <div class="oq-overview-head-actions">
              <div class="oq-overview-status">
                ${renderOverviewStatusChip("Strategie", strategyLabel, "blue")}
                ${renderOverviewStatusChip("Controlmode", getEntityStateText("controlModeLabel"), "neutral")}
              </div>
            </div>
          </div>
          <div class="oq-overview-top">
            ${renderOverviewTopCards()}
          </div>
          ${renderOverviewSignals()}
          <div class="oq-overview-main">
            ${renderOverviewStrategyPanel()}
            <section class="oq-overview-temps">
              ${renderOverviewTempsSection()}
            </section>
          </div>
          ${renderHeatPumpControls(heatPumpPanels)}
          <div class="oq-overview-hp-grid ${heatPumpPanels.length === 1 ? "oq-overview-hp-grid--single" : ""} ${heatPumpPanels.length > 1 ? `oq-overview-hp-grid--${hpLayoutMode}` : ""}">
            ${heatPumpPanels.map((panel, index) => renderHeatPumpPanel(panel.title, panel.keys, panel.accent, getHeatPumpPanelEmphasis(index, heatPumpPanels, hpLayoutMode), getHeatPumpPanelLayoutAction(index, heatPumpPanels, hpLayoutMode))).join("")}
          </div>
        </div>
      </section>
    `;
  }

  function setTextContent(root, selector, value) {
    if (!root) {
      return;
    }
    const node = root.querySelector(selector);
    if (node && node.textContent !== value) {
      node.textContent = value;
    }
  }

  function setInnerHtmlIfChanged(node, markup) {
    if (!node) {
      return;
    }
    if (node.innerHTML !== markup) {
      node.innerHTML = markup;
    }
  }

  function setVariantClass(node, prefix, value, variants) {
    if (!node) {
      return;
    }
    const target = `${prefix}${value}`;
    const current = variants
      .map((variant) => `${prefix}${variant}`)
      .find((variantClass) => node.classList.contains(variantClass));

    if (current === target) {
      return;
    }

    variants.forEach((variant) => node.classList.remove(`${prefix}${variant}`));
    node.classList.add(target);
  }

  function updatePipeGroup(root, id, tone, d) {
    const group = root.querySelector(`[data-oq-pipe="${id}"]`);
    if (!group) {
      return;
    }
    setVariantClass(group, "oq-hp-tech-pipe--", tone, ["supply", "return", "hotgas", "liquid", "expansion", "suction"]);
    group.querySelectorAll("path").forEach((path) => {
      if (path.getAttribute("d") !== d) {
        path.setAttribute("d", d);
      }
    });
  }

  function hideTechTooltip(tooltip) {
    if (!tooltip) {
      return;
    }
    tooltip.classList.remove("is-active");
    tooltip.setAttribute("aria-hidden", "true");
  }

  function showTechTooltip(board, layer, tooltip) {
    if (!board || !layer || !tooltip) {
      return;
    }

    board.querySelectorAll(".oq-hp-tech-tooltip.is-active").forEach((node) => {
      if (node !== tooltip) {
        hideTechTooltip(node);
      }
    });
    layer.appendChild(tooltip);
    tooltip.classList.add("is-active");
    tooltip.setAttribute("aria-hidden", "false");
  }

  function wireTechTooltipTrigger(board, layer, trigger, tooltip) {
    if (!board || !layer || !trigger || !tooltip || trigger.dataset.oqTooltipWired === "true") {
      return;
    }

    trigger.dataset.oqTooltipWired = "true";
    const hideIfIdle = () => {
      if (trigger.matches(":hover") || document.activeElement === trigger) {
        return;
      }
      hideTechTooltip(tooltip);
    };

    trigger.addEventListener("mouseenter", () => showTechTooltip(board, layer, tooltip));
    trigger.addEventListener("mouseleave", hideIfIdle);
    trigger.addEventListener("focus", () => showTechTooltip(board, layer, tooltip));
    trigger.addEventListener("blur", hideIfIdle);
  }

  function ensureTechTooltipLayering(board) {
    if (!board) {
      return;
    }

    const svg = board.querySelector(".oq-hp-tech-svg");
    if (!svg) {
      return;
    }

    let layer = svg.querySelector(".oq-hp-tech-tooltip-layer");
    if (!layer) {
      layer = document.createElementNS("http://www.w3.org/2000/svg", "g");
      layer.setAttribute("class", "oq-hp-tech-tooltip-layer");
      svg.appendChild(layer);
    }

    Array.from(svg.querySelectorAll(".oq-hp-tech-tooltip")).forEach((tooltip) => {
      layer.appendChild(tooltip);
    });

    board.querySelectorAll("[data-oq-tooltip-target]").forEach((trigger) => {
      const target = trigger.getAttribute("data-oq-tooltip-target");
      if (!target) {
        return;
      }
      const tooltip = board.querySelector(`[data-oq-bind="${target}-tooltip"]`);
      wireTechTooltipTrigger(board, layer, trigger, tooltip);
    });
  }

  function syncTechTooltipLayers(root = state.root) {
    if (!root) {
      return;
    }

    root.querySelectorAll("[data-oq-hp-board]").forEach((board) => {
      ensureTechTooltipLayering(board);
    });
  }

  function patchHeatPumpPanel(panel, title, keys, accent) {
    if (!panel) {
      return;
    }

    const mode = formatWorkingMode(getEntityStateText(keys.mode, "Unknown"));
    const defrostActive = isEntityActive(keys.defrost);
    const failures = formatFailures(getEntityStateText(keys.failures, "None"));
    const running = mode === "Verwarmen" || mode === "Koelen" || defrostActive;
    const model = buildHeatPumpSchematicModel(title, keys, accent, mode, defrostActive, failures, running);
    const headStatus = panel.querySelector(".oq-overview-hp-status");
    if (headStatus) {
      patchHpPanelStatusRow(headStatus, mode, running, model.warningActive, model.failureText);
    }

    const board = panel.querySelector("[data-oq-hp-board]");
    if (!board) {
      return;
    }

    if (board.className !== model.boardClass) {
      board.className = model.boardClass;
    }
    setTextContent(board, '[data-oq-bind="status"]', model.statusText);
    setTextContent(board, '[data-oq-bind="left-exchanger-title"]', model.leftExchangerTitle);
    setTextContent(board, '[data-oq-bind="right-exchanger-title"]', model.rightExchangerTitle);
    setTextContent(board, '[data-oq-bind="compressor-freq"]', model.compressorFreqText);
    setTextContent(board, '[data-oq-bind="flow-value"]', model.flowText);
    setTextContent(board, '[data-oq-bind="inner-coil-temp-value"]', model.innerCoilTempText);
    setTextContent(board, '[data-oq-bind="evaporator-temp-value"]', model.evaporatorCoilTempText);
    setTextContent(board, '[data-oq-bind="outside-temp-value"]', model.outsideTempText);
    setTextContent(board, '[data-oq-bind="discharge-pressure-value"]', model.dischargePressureText);
    setTextContent(board, '[data-oq-bind="discharge-temp-value"]', model.dischargeTempText);
    setTextContent(board, '[data-oq-bind="suction-pressure-value"]', model.suctionPressureText);
    setTextContent(board, '[data-oq-bind="suction-temp-value"]', model.suctionTempText);
    setTextContent(board, '[data-oq-bind="supply-value"]', model.waterOutText);
    setTextContent(board, '[data-oq-bind="return-value"]', model.waterInText);
    setTextContent(board, '[data-oq-bind="footer-mode"]', model.mode);
    setTextContent(board, '[data-oq-bind="footer-power"]', model.powerText);
    const footerHeatLabel = board.querySelector('[data-oq-bind="footer-heat-label"]');
    if (footerHeatLabel) {
      footerHeatLabel.setAttribute("aria-label", model.heatLabel);
      const nextHeatLabelMarkup = model.heatLabel === "Koelafgifte" ? "Koel<br>afgifte" : "Warmte<br>afgifte";
      if (footerHeatLabel.innerHTML !== nextHeatLabelMarkup) {
        footerHeatLabel.innerHTML = nextHeatLabelMarkup;
      }
    }
    setTextContent(board, '[data-oq-bind="footer-heat"]', model.heatText);
    setTextContent(board, '[data-oq-bind="footer-efficiency-label"]', model.efficiencyLabel);
    setTextContent(board, '[data-oq-bind="footer-efficiency"]', model.efficiencyText);
    setTextContent(board, '[data-oq-bind="fan-speed-value"]', model.fanRpmText);
    setTextContent(board, '[data-oq-bind="fourway-detail"]', model.fourWayPositionText);
    setTextContent(board, '[data-oq-bind="eev-detail"]', model.eevPositionText);
    const bottomHeater = board.querySelector('[data-oq-bind="bottom-heater"]');
    if (bottomHeater) {
      bottomHeater.classList.toggle("is-active", model.bottomPlateActive);
      bottomHeater.setAttribute("tabindex", model.bottomPlateActive ? "0" : "-1");
      if (!model.bottomPlateActive) {
        hideTechTooltip(board.querySelector('[data-oq-bind="bottom-heater-tooltip"]'));
      }
    }
    const crankcaseHeater = board.querySelector('[data-oq-bind="crankcase-heater"]');
    if (crankcaseHeater) {
      crankcaseHeater.classList.toggle("is-active", model.crankcaseActive);
      crankcaseHeater.setAttribute("tabindex", model.crankcaseActive ? "0" : "-1");
      if (!model.crankcaseActive) {
        hideTechTooltip(board.querySelector('[data-oq-bind="crankcase-heater-tooltip"]'));
      }
    }
    const defrostBadge = board.querySelector('[data-oq-bind="defrost-badge"]');
    if (defrostBadge) {
      defrostBadge.setAttribute("tabindex", model.defrostActive ? "0" : "-1");
      defrostBadge.setAttribute("aria-label", model.defrostActive ? "Defrost actief" : "Defrost uit");
      if (!model.defrostActive) {
        hideTechTooltip(board.querySelector('[data-oq-bind="defrost-badge-tooltip"]'));
      }
    }

    setVariantClass(board.querySelector('[data-oq-bind="supply-tooltip"]'), "oq-hp-tech-tooltip--", model.supplyLineTone, ["warm", "supply", "return"]);
    setVariantClass(board.querySelector('[data-oq-bind="return-tooltip"]'), "oq-hp-tech-tooltip--", model.returnLineTone, ["warm", "supply", "return"]);
    const supplyReading = board.querySelector('[data-oq-bind="supply-reading"]');
    if (supplyReading) {
      supplyReading.setAttribute("aria-label", `Aanvoer temperatuur ${model.waterOutText}`);
    }
    const flowReading = board.querySelector('[data-oq-bind="flow-reading"]');
    if (flowReading) {
      flowReading.setAttribute("aria-label", `Flow ${model.flowText}`);
    }
    const innerCoilTempReading = board.querySelector('[data-oq-bind="inner-coil-temp-reading"]');
    if (innerCoilTempReading) {
      innerCoilTempReading.setAttribute("aria-label", `Inner coil temperatuur ${model.innerCoilTempText}`);
    }
    const evaporatorTempReading = board.querySelector('[data-oq-bind="evaporator-temp-reading"]');
    if (evaporatorTempReading) {
      evaporatorTempReading.setAttribute("aria-label", `Verdampertemperatuur ${model.evaporatorCoilTempText}`);
    }
    const outsideTempReading = board.querySelector('[data-oq-bind="outside-temp-reading"]');
    if (outsideTempReading) {
      outsideTempReading.setAttribute("aria-label", `Buitentemperatuur ${model.outsideTempText}`);
    }
    const compressorFreqTrigger = board.querySelector('[data-oq-bind="compressor-freq-trigger"]');
    if (compressorFreqTrigger) {
      compressorFreqTrigger.setAttribute("aria-label", `Compressorfrequentie ${model.compressorFreqText}`);
    }
    const fanSpeedReading = board.querySelector('[data-oq-bind="fan-speed-reading"]');
    if (fanSpeedReading) {
      fanSpeedReading.setAttribute("aria-label", `Ventilatorsnelheid ${model.fanRpmText}`);
    }
    const dischargePressureReading = board.querySelector('[data-oq-bind="discharge-pressure-reading"]');
    if (dischargePressureReading) {
      dischargePressureReading.setAttribute("aria-label", `Persdruk ${model.dischargePressureText}`);
    }
    const dischargeTempReading = board.querySelector('[data-oq-bind="discharge-temp-reading"]');
    if (dischargeTempReading) {
      dischargeTempReading.setAttribute("aria-label", `Perstemperatuur ${model.dischargeTempText}`);
    }
    const returnReading = board.querySelector('[data-oq-bind="return-reading"]');
    if (returnReading) {
      returnReading.setAttribute("aria-label", `Retour temperatuur ${model.waterInText}`);
    }
    const suctionPressureReading = board.querySelector('[data-oq-bind="suction-pressure-reading"]');
    if (suctionPressureReading) {
      suctionPressureReading.setAttribute("aria-label", `Zuigdruk ${model.suctionPressureText}`);
    }
    const suctionTempReading = board.querySelector('[data-oq-bind="suction-temp-reading"]');
    if (suctionTempReading) {
      suctionTempReading.setAttribute("aria-label", `Zuigtemperatuur ${model.suctionTempText}`);
    }
    const fourWayTrigger = board.querySelector('[data-oq-bind="fourway-trigger"]');
    if (fourWayTrigger) {
      fourWayTrigger.setAttribute("aria-label", `4-wegklep, ${model.fourWayPositionText}`);
    }
    const eevTrigger = board.querySelector('[data-oq-bind="eev-trigger"]');
    if (eevTrigger) {
      eevTrigger.setAttribute("aria-label", `Expansieventiel, ${model.eevPositionText}`);
    }
    setVariantClass(board.querySelector(".oq-hp-tech-pump"), "oq-hp-tech-pump--", model.returnLineTone, ["supply", "return"]);
    const condWater = board.querySelector('[data-oq-bind="cond-water"]');
    if (condWater) {
      const svgIdBase = String(model.title || "hp").toLowerCase().replace(/[^a-z0-9]+/g, "-");
      const fillId = model.reverseCycle ? `${svgIdBase}-cond-water-cool` : `${svgIdBase}-cond-water-heat`;
      const fillValue = `url(#${fillId})`;
      if (condWater.getAttribute("fill") !== fillValue) {
        condWater.setAttribute("fill", fillValue);
      }
    }

    Object.entries(model.pipes).forEach(([id, pipe]) => {
      updatePipeGroup(board, id.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`), pipe.tone, pipe.d);
    });
    ensureTechTooltipLayering(board);
    refreshMotionTargets();
  }

  function patchOverviewDom() {
    if (!state.root || state.appView !== "overview" || state.hpVisualMode !== "schematic") {
      return false;
    }

    const board = state.root.querySelector(".oq-overview-board");
    if (!board) {
      return false;
    }

    const strategyLabel = getOverviewStrategyLabel();
    const status = board.querySelector(".oq-overview-status");
    const top = board.querySelector(".oq-overview-top");
    const signals = board.querySelector(".oq-overview-signals");
    const system = board.querySelector(".oq-overview-system");
    const temps = board.querySelector(".oq-overview-temps");
    const hpTools = board.querySelector(".oq-overview-hp-tools");
    const hpGrid = board.querySelector(".oq-overview-hp-grid");
    const heatPumpPanels = getHeatPumpPanels();

    if (status) {
      setInnerHtmlIfChanged(status, `
        ${renderOverviewStatusChip("Strategie", strategyLabel, "blue")}
        ${renderOverviewStatusChip("Controlmode", getEntityStateText("controlModeLabel"), "neutral")}
      `);
    }

    if (top) {
      setInnerHtmlIfChanged(top, renderOverviewTopCards());
    }

    if (signals) {
      const nextSignals = renderOverviewSignals();
      if (signals.outerHTML !== nextSignals) {
        signals.outerHTML = nextSignals;
      }
    }

    if (system) {
      system.outerHTML = renderOverviewStrategyPanel();
    }

    if (temps) {
      temps.innerHTML = renderOverviewTempsSection();
    }

    if (!hpTools || !hpGrid) {
      return false;
    }

    patchHeatPumpControls(hpTools, heatPumpPanels);

    const renderedPanels = hpGrid.querySelectorAll("[data-oq-hp-panel]");
    if (renderedPanels.length !== heatPumpPanels.length) {
      return false;
    }

    const hpLayoutMode = getEffectiveHpLayoutMode(heatPumpPanels);
    hpGrid.classList.toggle("oq-overview-hp-grid--single", heatPumpPanels.length === 1);
    hpGrid.classList.toggle("oq-overview-hp-grid--equal", heatPumpPanels.length > 1 && hpLayoutMode === "equal");
    hpGrid.classList.toggle("oq-overview-hp-grid--focus-hp1", heatPumpPanels.length > 1 && hpLayoutMode === "focus-hp1");
    hpGrid.classList.toggle("oq-overview-hp-grid--focus-hp2", heatPumpPanels.length > 1 && hpLayoutMode === "focus-hp2");
    heatPumpPanels.forEach((panel, index) => {
      const panelNode = board.querySelector(`[data-oq-hp-panel="${panel.title}"]`);
      if (panelNode) {
        panelNode.classList.remove("oq-overview-hp--normal", "oq-overview-hp--focus", "oq-overview-hp--muted");
        panelNode.classList.add(`oq-overview-hp--${getHeatPumpPanelEmphasis(index, heatPumpPanels, hpLayoutMode)}`);
        const headSide = panelNode.querySelector(".oq-overview-hp-head-side");
        const headTitle = panelNode.querySelector(".oq-overview-hp-head-title");
        if (headSide) {
          const mode = formatWorkingMode(getEntityStateText(panel.keys.mode, "Unknown"));
          const defrostActive = isEntityActive(panel.keys.defrost);
          const failures = formatFailures(getEntityStateText(panel.keys.failures, "None"));
          const running = mode === "Verwarmen" || mode === "Koelen" || defrostActive;
          const layoutAction = getHeatPumpPanelLayoutAction(index, heatPumpPanels, hpLayoutMode);
          if (headTitle) {
            setInnerHtmlIfChanged(headTitle, `
              <h3>${escapeHtml(panel.title)}</h3>
              ${layoutAction ? `<button class="oq-overview-hp-card-action" type="button" data-oq-action="select-hp-layout" data-hp-layout="${escapeHtml(layoutAction.layout)}">${renderMagnifyActionIcon(layoutAction.layout === "equal" ? "minus" : "plus")}<span>${escapeHtml(layoutAction.label)}</span></button>` : ""}
            `);
          }
          let hpStatus = headSide.querySelector(".oq-overview-hp-status");
          if (!hpStatus) {
            setInnerHtmlIfChanged(headSide, `
              <div class="oq-overview-hp-status">
                ${renderHpPanelStatusRow(mode, running, failures !== "Geen actieve storingen", failures)}
              </div>
            `);
            hpStatus = headSide.querySelector(".oq-overview-hp-status");
          }
          patchHpPanelStatusRow(hpStatus, mode, running, failures !== "Geen actieve storingen", failures);
        }
      }
      patchHeatPumpPanel(
        panelNode,
        panel.title,
        panel.keys,
        panel.accent,
      );
    });

    return true;
  }

  function renderSettingsView() {
    return `
      <section class="oq-helper-panel">
        <p class="oq-helper-label">Instellingen</p>
        <h2 class="oq-helper-section-title">Regeling aanpassen</h2>
        <p class="oq-helper-section-copy">Hier pas je aan hoe OpenQuatt werkt. Wijzigingen worden direct toegepast.</p>
        <div class="oq-helper-settings-stack">
          ${renderSettingsFlowSection()}
          ${renderSettingsHeatingSection()}
          ${renderSettingsCoolingSection()}
          ${renderSettingsWaterSection()}
          ${renderSettingsCompressorSection()}
          ${renderSettingsSilentSection()}
        </div>
      </section>
    `;
  }

  function renderInitialLoadingView() {
    return `
      <section class="oq-helper-panel">
        <p class="oq-helper-label">OpenQuatt</p>
        <h2 class="oq-helper-section-title">Interface laden</h2>
        <p class="oq-helper-section-copy">We bepalen eerst even of Quick Start al is afgerond, zodat je direct op de juiste plek binnenkomt.</p>
      </section>
    `;
  }

  function render() {
    if (!state.root) {
      return;
    }

    if (state.nativeOpen) {
      state.root.innerHTML = `
        ${renderDevPanel()}
        ${renderNativeSurfaceShell()}
      `;
      state.quickStartRenderSignature = "";
      state.settingsRenderSignature = "";
      state.headerRenderSignature = getHeaderRenderSignature();
      stopMotionLoop();
      syncNativeVisibility();
      bindHeaderDevControls();
      syncDocumentTheme();
      syncDocumentTitle();
      return;
    }

    const mainContent = state.loadingEntities || !hasLoadedEntities()
      ? renderInitialLoadingView()
      : state.appView === "overview"
      ? renderOverviewView()
      : state.appView === "energy"
      ? renderEnergyView()
      : state.appView === "settings"
        ? renderSettingsView()
        : `
          <div class="oq-helper-grid oq-helper-grid--quickstart">
            ${renderActiveStep()}
            ${renderQuickStartSidebar()}
          </div>
        `;
    const wideFlushCard = state.appView === "overview" || state.appView === "energy";

    state.root.innerHTML = `
      ${renderDevPanel()}
      <div class="oq-helper-shell${state.overviewTheme === "dark" ? " oq-helper-shell--dark" : ""}">
        <div class="oq-helper-card${wideFlushCard ? " oq-helper-card--wide-flush" : ""}">
          <div class="oq-helper-head">
            <div class="oq-helper-brand">
              <div class="oq-helper-logo-lockup">
                ${LOGO_MARKUP}
              <div class="oq-helper-brand-copy">
                  <h1>Regeling, inzicht en tuning</h1>
                </div>
              </div>
              <p class="oq-helper-lead">Alles voor je OpenQuatt op één plek: snel instellen, live meekijken en later verder finetunen.</p>
            </div>
            ${renderHeaderStatus()}
          </div>
          ${renderAppNav()}
          ${mainContent}
        </div>
      </div>
      ${renderUpdateModal()}
      ${renderSystemModal()}
    `;
    state.quickStartRenderSignature = state.appView === QUICK_START_VIEW ? getQuickStartRenderSignature() : "";
    state.settingsRenderSignature = state.appView === "settings" ? getSettingsRenderSignature() : "";
    state.headerRenderSignature = getHeaderRenderSignature();
    clearLegacyMotionVariables();
    syncTechTooltipLayers();
    refreshMotionTargets();
    syncNativeVisibility();
    bindHeaderDevControls();
    syncDocumentTheme();
    syncDocumentTitle();
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
