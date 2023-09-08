export const currentSituationPrompt =
    [
        {
            "role": "system", "content": "You are creating a project proposal report for a chemical production plant, \
        and the first section should describe the current situation of a specific process. Your task generate a short text section of roughly 200 words that \
        describes the current state, including its performance and efficiency; information will be provided and you need to convert this into a short text section. \
        Your report section should be well-structured and clearly written, providing the reader with a comprehensive understanding of the processes's current state and performance. \
        Only respond with text for the report, do not describe what you were doing and do not add small talk and chit-chat." },


        { "role": "user", "content": "Preheat from 20 to 250C with steam, can be done using waste heat" },
        {
            "role": "assistant", "content": "The chemical production plant is currently operating at full capacity \
        and has been meeting its production targets. However, one area that could be improved is the energy \
        efficiency of the preheating process. Currently, the preheating process uses a lot of energy to heat up \
        the raw materials from 20°C to 250°C before they enter the main production process. This is not only costly, \
        but it also contributes to the plant's overall carbon footprint. There are several ongoing initiatives aimed \
        at improving the plant's energy efficiency, including exploring the use of solar energy and waste heat recovery \
        systems as alternative energy sources, and implementing process improvements such as using insulation materials \
        to reduce heat loss during the preheating step. The plant's management team is also actively seeking input \
        from experts in the field to identify additional opportunities for improvement." }
    ]

export const roomForImprovementPrompt =
    [
        {
            "role": "system", "content": "You are creating a project proposal report for a chemical production plant, \
        this is the second section of the document that describes room for improvement of  a specific process. Your task generate a short text section of roughly 200 words that \
        describes what can be improved; information will be provided and you need to convert this into a short text section. \
        Your report section should be well-structured and clearly written, providing the reader with a comprehensive understanding of the processes's potential for improvement. \
        Only respond with text for the report, do not describe what you were doing and do not add small talk and chit-chat." },
        { "role": "user", "content": "30% effective energy use, industry standard is 90%" },
        {
            "role": "assistant", "content": "The current process operates at an efficiency of 30%, I.E. of the energy input only 30% is effectively used, whereas similar industries operate the same process at 90% efficiency. \
            Based on the current figures an improvement of 60% can be achieved, resulting in a threefold reduction of the energy input required." }
    ]


export const measurePrompt =
    [{
        "role": "system", "content": "You are creating a project proposal report for a chemical production plant, \
    this is the third section of the document that describes measures taken to optimize a specific process. Your task generate a short text section of roughly 200 words that \
    describes what needs to be done to achieve the earlier described problems; information will be provided and you need to convert this into a short text section. \
    Your report section should be well-structured and clearly written, providing the reader with a comprehensive understanding measure. \
    Only respond with text for the report, do not describe what you were doing and do not add small talk and chit-chat."
    },
    { "role": "user", "content": "new waste heat exchanger" },
    {
        "role": "assistant", "content": "A new waste heat exchanger is being installed to recover waste heat from the preheating process. \
        This will result in less steam usage to preheat the raw material stream, effectively reducing the plants' energy consumption. \
        Additionally, by recovering waste heat, the overall cooling load of the plant will be reduced, which will lead to further energy savings."
    }
    ]


export const risksPrompt =
    [{
        "role": "system", "content": "You are creating a project proposal report for a chemical production plant, \
    this is the final section of the document that describes potential risks involved in executing the proposed measures (described in the first 3 sections) Your task generate a short text section of roughly 200 words that \
    describes what risks there are; information will be provided and you need to convert this into a short text section. \
    Your report section should be well-structured and clearly written, providing the reader with a comprehensive understanding of the risks and how to mitigate them. \
    Only respond with text for the report, do not describe what you were doing and do not add small talk and chit-chat." },
    { "role": "user", "content": "We are concerned about potential risks that may arise from implementing energy-saving measures at our plant." },
    {
        "role": "assistant", "content": "There are some potential risks that should be considered when implementing energy-saving measures at your chemical plant. These include: \
    - Possible disruptions to the production process during the implementation phase \
    - Additional capital costs associated with purchasing and installing new equipment \
    - Changes to the production process that may require additional training for employees \
    - Possible impacts on product quality or output \
    However, these risks can be effectively managed through careful planning and execution, and the benefits of improved energy efficiency are likely to outweigh the potential risks."}
    ]


    [{ "role": "system", "content": "Please describe the measures that can be taken to improve energy efficiency at your chemical plant." },
    { "role": "user", "content": "We are interested in implementing measures that can help improve energy efficiency in the cooling and compression stages of the polymerization process. Additionally, we would like to explore the feasibility of adopting a more efficient catalyst system." },
    {
        "role": "assistant", "content": "To improve energy efficiency in the cooling and compression stages, potential measures include: \
    - Upgrading equipment to more energy-efficient models \
    - Implementing advanced process control techniques to optimize energy consumption \
    - Exploring heat recovery options to capture and reuse waste heat \
    Regarding the catalyst system, conducting feasibility studies on alternative catalysts with higher conversion efficiency is recommended. This can lead to reduced energy requirements and improved overall process efficiency."}
    ]
