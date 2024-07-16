import React, { useEffect, useRef } from "react";

import ApexCharts, { ApexOptions } from "apexcharts";
import { useThemeMode } from "../../../../partials";
import { getCSSVariableValue } from "../../../../assets/ts/_utils";

type Props = {
	chartColor: string;
	chartHeight: string;
	value: number;
};

const CoursProgression: React.FC<Props> = ({ chartColor, chartHeight, value }) => {
	const chartRef = useRef<HTMLDivElement | null>(null);
	const { mode } = useThemeMode();
	const refreshChart = () => {
		if (!chartRef.current) {
			return;
		}

		const chart = new ApexCharts(
			chartRef.current,
			chartOptions(chartColor, chartHeight, value)
		);
		if (chart) {
			chart.render();
		}

		return chart;
	};

	useEffect(() => {
		const chart = refreshChart();

		return () => {
			if (chart) {
				chart.destroy();
			}
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [chartRef, mode]);
	return (
		<>
			<div className="col-xl-3">
				<div className="card mb-8 card-xl-stretch">
					<div className="card-body text-center">
						<div ref={chartRef} className="mixed-widget-4-chart"></div>
					</div>
				</div>
			</div>
		</>
	);
};

const chartOptions = (chartColor: string, chartHeight: string, value: number): ApexOptions => {
	const baseColor = getCSSVariableValue("--bs-" + chartColor);
	const lightColor = getCSSVariableValue("--bs-" + chartColor + "-light");
	const labelColor = getCSSVariableValue("--bs-gray-700");

	return {
		series: [value],
		chart: {
			fontFamily: "inherit",
			height: chartHeight,
			type: "radialBar",
		},
		plotOptions: {
			radialBar: {
				hollow: {
					margin: 0,
					size: "65%",
				},
				dataLabels: {
					name: {
						show: false,
						fontWeight: "700",
					},
					value: {
						color: labelColor,
						fontSize: "30px",
						fontWeight: "700",
						offsetY: 12,
						show: true,
						formatter: function (val) {
							return val + "%";
						},
					},
				},
				track: {
					background: lightColor,
					strokeWidth: "100%",
				},
			},
		},
		colors: [baseColor],
		stroke: {
			lineCap: "round",
		},
		labels: ["Progress"],
	};
};

export default CoursProgression;
