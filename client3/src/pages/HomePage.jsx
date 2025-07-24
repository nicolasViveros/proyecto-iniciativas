import { useState } from "react";
import TaskCard from "../components/TaskCard";
import { useNavigate } from "react-router-dom";
import { MdOutlineFileDownload } from "react-icons/md";
import { useLanguage } from "../context/LanguageContext";

function HomePage() {
  const navigate = useNavigate();
  const [activo, setActivo] = useState(0);
  const { language, toggleLanguage } = useLanguage();

  const secciones = [
    {
      titulo: {
        es: "Contexto",
        en: "Context",
        pt: "Contexto",
      },
      contenido: {
        es: (
          <>
            <strong>Euroclima</strong> es el programa de cooperación regional
            que promueve una asociación estratégica entre la Unión Europea y
            América Latina y el Caribe, basada en valores compartidos y en el
            compromiso de afrontar conjuntamente el cambio climático y la
            pérdida de biodiversidad. Es una plataforma para el intercambio de
            ideas, conocimientos y experiencias entre ambas regiones.
            <div className="my-4">
              El programa es{" "}
              <strong>
                cofinanciado por la Unión Europea y el Gobierno Federal Alemán
              </strong>
              , a través del Ministerio Federal de Cooperación Económica y
              Desarrollo (BMZ). Su objetivo es contribuir a una transición
              sostenible, resiliente e inclusiva mediante acciones de mitigación
              y adaptación al cambio climático, incluyendo la protección,
              restauración y conservación de la biodiversidad, así como la
              promoción de la economía circular.
            </div>
            <div className="my-4">
              Euroclima apoya a los países socios en la creación de condiciones
              propicias para atraer inversiones, en particular en el marco de la
              Global Gateway Investment Agenda (GGIA) y la cooperación UE-CELAC
              (Comunidad de Estados Latinoamericanos y Caribeños). Este esfuerzo
              contribuye a transiciones sostenibles y justas que promueven la
              resiliencia, la neutralidad de carbono y la prosperidad inclusiva.
            </div>
          </>
        ),
        en: (
          <>
            <strong>Euroclima</strong> is the regional cooperation programme
            that promotes a strategic partnership between the European Union and
            Latin America and the Caribbean, based on shared values and a
            commitment to jointly address climate change and biodiversity loss.
            It is a platform for the exchange of ideas, knowledge and
            experiences between the two regions.
            <div className="my-4">
              The programme is{" "}
              <strong>
                co-financed by the European Union and the German Federal
                Government{" "}
              </strong>
              through the Federal Ministry for Economic Cooperation and
              Development (BMZ). It aims to contribute to a sustainable,
              resilient and inclusive transition through climate change
              mitigation and adaptation actions, including the protection,
              restoration and conservation of biodiversity, as well as the
              promotion of the circular economy.
            </div>
            <div className="my-4">
              Euroclima supports partner countries in creating enabling
              conditions to attract investments, in particular in the framework
              of the Global Gateway Investment Agenda (GGIA) and the EU-CELAC
              (Community of Latin American and Caribbean States) cooperation.
              This effort contributes to sustainable and just transitions that
              promote resilience, carbon neutrality and inclusive prosperity.
            </div>
          </>
        ),
        pt: (
          <>
            O {" "}<strong>Euroclima</strong> é um programa de cooperação regional que promove uma parceria estratégica entre a União Europeia e a América Latina e o Caribe, com base em valores compartilhados e no compromisso de enfrentar conjuntamente as mudanças climáticas e a perda de biodiversidade. É uma plataforma para o intercâmbio de ideias, conhecimentos e experiências entre as duas regiões.
            <div className="my-4">
              O programa é cofinanciado pela União Europeia e pelo governo federal alemão por meio do Ministério Federal de Cooperação Econômica e Desenvolvimento (BMZ). Seu objetivo é contribuir para uma transição sustentável, resiliente e inclusiva por meio de ações de mitigação e adaptação às mudanças climáticas, incluindo a proteção, a restauração e a conservação da biodiversidade, bem como a promoção da economia circular.
            </div>
            <div className="my-4">
              O Euroclima apoia os países parceiros na criação de condições favoráveis para atrair investimentos, em especial no âmbito da Global Gateway Investment Agenda (GGIA) e da cooperação UE-CELAC (Comunidade de Estados Latino-Americanos e Caribenhos). Esse esforço contribui para transições sustentáveis e justas que promovem a resiliência, a neutralidade de carbono e a prosperidade inclusiva.
            </div>
          </>
        ),
      },
    },
    {
      titulo: {
        es: "SoMoS LAC – Comunidad de Práctica en Movilidad Sostenible ",
        en: "SoMoS LAC – Community of Practice in Sustainable Mobility",
        pt: "SoMoS LAC - Comunidade de Prática em Mobilidade Sustentável",
      },
      contenido: {
        es: (
          <>
            El concurso SoMoS LAC "Rumbo a la Equidad: Reconociendo iniciativas
            innovadoras en favor de la equidad de género en movilidad urbana" es
            una iniciativa impulsada por Euroclima. Su objetivo es fortalecer la
            cooperación con América Latina y el Caribe para avanzar hacia una
            transición verde, justa y sostenible, apoyando a 33 países.
            <div className="my-4">
              Desde 2018, el programa Euroclima ha apoyado la creación de la
              Comunidad de Práctica SoMoS LAC. En 2023, la comunidad entró en
              una nueva fase de implementación, liderada por el componente de
              Transporte Sostenible, ejecutado por la Cooperación Alemana para
              el Desarrollo (GIZ).
            </div>
            <div className="my-4">
              La misión de SoMoS LAC es conectar a una red de actores públicos,
              privados y de la sociedad civil, facilitando el diálogo y la
              colaboración para impulsar liderazgos, políticas y acciones
              orientadas a mejorar los sistemas de movilidad en la región de
              forma sostenible. SoMoS LAC se estructura en grupos temáticos que
              ofrecen espacios dinámicos para propiciar aprendizajes y acciones
              colaborativas, siendo uno de ellos el grupo temático de {"  "}
              <strong>
                Género, Equidad e Inclusión en los Sistemas de Movilidad
              </strong>
              , liderado por el Ministerio de Transporte de Colombia, quien
              promueve el presente concurso como parte de su plan de acción.
            </div>
          </>
        ),
        en: (
          <>
            SoMoS LAC contest, “Towards Equity: Recognizing Innovative
            Initiatives for Gender Equity in Urban Mobility,” is promoted by
            Euroclima. Its mission is to strengthen cooperation with Latin
            America and the Caribbean, fostering a green, fair, and sustainable
            transition across 33 countries.
            <div className="my-4">
              Since 2018, Euroclima has supported the creation of SoMoS LAC -
              Community of Practice. In 2023, the community entered a new
              implementation phase, led by the Sustainable Transport component
              implemented by German Development Cooperation (GIZ).
            </div>
            <div className="my-4">
              SoMoS LAC connects public, private, and civil society actors,
              fostering dialogue and collaboration to drive leadership, policy
              development, and initiatives that improve mobility systems
              sustainably across the region. The network is structured into
              thematic groups, including the{" "}
              <strong>
                Gender, Equity, and Inclusion in Mobility Systems group,{" "}
              </strong>
              led by the Colombian Ministry of Transport, which is promoting
              this contest as part of its action plan.
            </div>
          </>
        ),
        pt: (
          <>
            O concurso SoMoS LAC "Rumo à Equidade: Reconhecimento de Iniciativas Inovadoras em Prol da Igualdade de Gênero na Mobilidade Urbana" é uma iniciativa promovida pelo Euroclima, um programa da União Europeia que integra a estratégia Global Gateway. Seu objetivo é fortalecer a cooperação com a América Latina e o Caribe para avançar em direção a uma transição verde, justa e sustentável, apoiando 33 países.
            <div className="my-4">
              Desde 2018, o Programa Euroclima tem apoiado a criação da Comunidade de Prática SoMoS LAC. Em 2023, a comunidade entrou em uma nova fase de implementação, liderada pelo componente de Transporte Sustentável, executado pela Cooperação Alemã para o Desenvolvimento (GIZ).
            </div>
            <div className="my-4">
              A missão da SoMoS LAC é conectar uma rede de atores públicos, privados e da sociedade civil, facilitando o diálogo e a colaboração para promover lideranças, políticas e ações destinadas a melhorar os sistemas de mobilidade na região de forma sustentável. A SoMoS LAC está estruturada em grupos temáticos que oferecem espaços dinâmicos para promover ações de aprendizagem e colaboração, sendo um deles o grupo temático de Gênero, Equidade e Inclusão em Sistemas de Mobilidade, liderado pelo Ministério dos Transportes da Colômbia, que promove este concurso como parte de seu plano de ação.
            </div>
          </>
        ),
      },
    },
    {
      titulo: {
        es: "Delimitación de responsabilidad ",
        en: "Disclaimer",
        pt: "Delimitación de responsabilidad ",
      },
      contenido: {
        es: (
          <>
            Este concurso cuenta con el apoyo financiero de la Unión Europea a
            través del programa Euroclima, el contenido del mismo es
            responsabilidad exclusiva de SoMoS LAC y en ningún caso debe
            considerarse que refleja los puntos de vista de la Unión Europea
          </>
        ),
        en: (
          <>
            This competition is financially supported by the European Union
            through Euroclima programme, the content of the competition is the
            sole responsibility of SoMoS LAC and can in no way be taken to
            reflect the views of the European Union.
          </>
        ),
        pt: (
          <>
            Este concurso é apoiado financeiramente pela União Europeia por meio do Programa Euroclima. O conteúdo do concurso é de responsabilidade exclusiva da SoMoS LAC e não pode, de forma alguma, ser considerado como um reflexo das opiniões da União Europeia.
          </>
        ),
      },
    },
    {
      titulo: {
        es: "Propósito del Reconocimiento SoMoS LAC",
        en: "Purpose of the SoMoS LAC Award",
        pt: "Objetivo do reconhecimento do SoMoS LAC",
      },
      contenido: {
        es: (
          <>
            El propósito del concurso es: reconocer, visibilizar y promover
            iniciativas innovadoras en favor de la equidad e inclusión de género
            en la movilidad urbana, en América Latina y El Caribe. Las
            iniciativas participantes serán difundidas por SoMos LAC a través de
            un mapa web interactivo que mostrará sus principales
            características. De esta manera se contribuye al fomento de la
            movilidad sostenible en mujeres, así como a la promoción de una
            mejor experiencia urbana, de transporte y de acceso al territorio.
            <div className="my-4">
              Se evaluarán mejor aquellas iniciativas con mayor impacto sobre la
              equidad e inclusión y potencial de replicabilidad y sostenibilidad
              en el tiempo. Este concurso está dirigido a instituciones
              públicas, empresas privadas, organizaciones de la sociedad civil y
              entidades académicas que lideren este tipo de iniciativas.
            </div>
            <div className="my-4">
              Mediante su postulación, los equipos participantes autorizan a
              SoMoS LAC a difundir los principales datos de la iniciativa para
              el cumplimiento del propósito del concurso, resguardando la
              confidencialidad de la información de carácter personal.
            </div>
          </>
        ),
        en: (
          <>
            The contest seeks to recognize, showcase, and promote innovative
            initiatives that advance gender equity and inclusion in urban
            mobility throughout Latin America and the Caribbean. Selected
            initiatives will be featured on SoMoS LAC’s interactive web map,
            highlighting their key features. In doing so, the contest aims to
            encourage sustainable mobility for women and improve their urban
            travel experience, as well as access to public spaces.
            <div className="my-4">
              Priority will be given to initiatives that have a tangible impact
              on equity and inclusion, with strong potential for replication and
              long-term sustainability. The contest is open to public
              institutions, private companies, civil society organizations, and
              academic entities leading these efforts.
            </div>
            <div className="my-4">
              By submitting an application, participants authorize SoMoS LAC to
              share essential information about their initiative for the
              contest’s objectives, while safeguarding personal data
              confidentiality.
            </div>
          </>
        ),
        pt: (
          <>
            O objetivo do concurso é reconhecer, visibilizar e promover iniciativas inovadoras em prol da equidade de gênero e da inclusão na mobilidade urbana, na América Latina e no Caribe. As iniciativas participantes serão divulgadas pela SoMos LAC por meio de um mapa interativo online que divulgará suas principais características, contribuindo para a promoção da mobilidade sustentável das mulheres, bem como para a promoção de uma experiência urbana de qualidade, transporte e acesso ao território.
            <div className="my-4">
              As iniciativas com maior impacto na equidade e inclusão, e com potencial de replicabilidade e sustentabilidade de longo prazo terão destaque na avaliação e receberão reconhecimento. Este concurso destina-se a instituições públicas, empresas privadas, organizações da sociedade civil e entidades acadêmicas que liderem as iniciativas inscritas.
            </div>
            <div className="my-4">
              Ao se inscreverem, as equipes participantes autorizam a SoMoS LAC a divulgar os principais dados da iniciativa, resguardando a confidencialidade das informações pessoais para fins de cumprimento dos objetivos do concurso.
            </div>
          </>
        ),
      },
    },
    {
      titulo: {
        es: "Categoría de postulación",
        en: "Application Category",
        pt: "Categoria de aplicação",
      },
      contenido: {
        es: (
          <>
            <div className="mb-4">El concurso contempla dos categorías:</div>
            <div>
              <h3>
                <strong>Instituciones públicas y Empresas privadas:</strong>
              </h3>
              Orientada a instituciones públicas, privadas y/o sociedades de
              capital mixto responsables de la regulación y operación del
              transporte urbano, así como a operadores de transporte, que hayan
              implementado iniciativas concretas para superar brechas de género
              en la movilidad urbana. Se valorarán acciones que promuevan la
              igualdad de oportunidades, la participación de las mujeres en el
              sector, la mejora de condiciones laborales con enfoque de género,
              o el diseño e implementación de servicios más seguros, accesibles
              e inclusivos.
            </div>
            <div className="my-4"></div>
            <div>
              <h3>
                <strong>
                  Organizaciones de la sociedad civil y Entidades académicas:
                </strong>
              </h3>
              Dirigida a organizaciones de la sociedad civil y entidades
              académicas que hayan desarrollado investigaciones, proyectos
              piloto, campañas, metodologías o programas de formación que
              promuevan la equidad de género en el ámbito de la movilidad
              urbana. Se priorizarán aquellas propuestas que hayan generado
              aprendizajes valiosos, incidencia en políticas públicas,
              articulación intersectorial o que tengan potencial de
              escalabilidad y réplica en otros contextos urbanos.
            </div>
          </>
        ),
        en: (
          <>
            <div className="mb-4">The contest includes two categories:</div>
            <div>
              <h3>
                <strong>Public Institutions and Private Companies:</strong>
              </h3>
              This category is intended for public or private entities, as well
              as joint ventures involved in urban transport regulation and
              operations, that have implemented concrete measures to address
              gender gaps in urban mobility. The contest will value initiatives
              that promote equal opportunities, increase women’s participation
              in the sector, improve working conditions with a gender lens, or
              design and implement safer, more inclusive, and accessible
              services.
            </div>
            <div className="my-4"></div>
            <div>
              <h3>
                <strong>
                  Civil Society Organizations and Academic Entities:
                </strong>
              </h3>
              This category is aimed at civil society groups and academic
              institutions that have developed research, pilot projects,
              campaigns, methodologies, or training programs promoting gender
              equity in urban mobility. Priority will be given to projects that
              have generated valuable insights, influenced public policy,
              fostered cross-sector collaboration, or shown potential for
              scaling and replication in other urban contexts.
            </div>
          </>
        ),
        pt: (
          <>
            <div className="mb-4">O concurso contempla duas categorias:</div>
            <div>
              <h3>
                <strong>Instituições públicas e empresas privadas:</strong>
              </h3>
              Destinada a instituições públicas, privadas e/ou de capital misto responsáveis pela regulação ou prestação de serviços de transporte urbano, bem como a operadores de transporte, que implementaram iniciativas concretas para superar as lacunas de gênero na mobilidade urbana. Serão valorizadas ações que promovam a igualdade de oportunidades, a participação das mulheres no setor, a melhoria das condições de trabalho com enfoque de género ou a concepção e implementação de serviços mais seguros, acessíveis e inclusivos.
            </div>
            <div className="my-4"></div>
            <div>
              <h3>
                <strong>
                  Organizações da sociedade civil e entidades acadêmicas
                </strong>
              </h3>
              Destinado a organizações da sociedade civil e entidades acadêmicas que tenham desenvolvido pesquisas, projetos-piloto, campanhas, metodologias ou programas de formação que promovam a igualdade de género no campo da mobilidade urbana. Serão priorizadas as propostas que tenham gerado aprendizados valiosos, impacto em políticas públicas, articulação intersetorial ou que apresentem potencial de escalabilidade e replicação em outros contextos urbanos.
            </div>
          </>
        ),
      },
    },
    {
      titulo: {
        es: "Requisitos de postulación y exclusiones",
        en: "Eligibility and Exclusions",
        pt: "Requisitos e restrições para a inscrição",
      },
      contenido: {
        es: (
          <>
            Se entenderá por iniciativa a cualquier acción, programa, proyecto o
            medida concreta, impulsada por una institución, colectivo o actor,
            implementada o en fase de implementación que tenga impactos
            comprobables o previstos en la equidad de género en el ámbito del
            transporte sostenible. En el contexto de movilidad con enfoque de
            género, una iniciativa puede adoptar diversas formas: desde una
            intervención puntual (como una campaña o una mejora en la
            infraestructura), hasta la implementación de una estrategia integral
            de largo plazo.
            <div className=" text-sm space-y-3 p-2">
              <div>
                <h3>
                  <strong>
                    Categoría Instituciones públicas y Empresas privadas
                  </strong>
                </h3>
                <ul className="list-disc list-inside ml-4">
                  <li>
                    La iniciativa debe haber sido implementada en al menos una
                    ciudad latinoamericana o caribeña o haber sido desarrollada
                    para un país que se encuentre en dichas regiones.
                  </li>
                  <li>
                    La organización postulante puede ser una institución pública
                    y/o privada.
                  </li>
                  <li>
                    La iniciativa debe haber comenzado su implementación entre
                    el 1 de enero de 2021 y hasta un año antes de la fecha de
                    postulación.
                  </li>
                  <li>
                    La organización debe estar legalmente constituida y
                    operativa.
                  </li>
                  <li>
                    No podrán postular iniciativas que estén participando
                    actualmente en el concurso Mujeres en Ruta 2025 de OBGEM, en
                    cualquiera de sus ciudades. Sin embargo otras iniciativas
                    del mismo proponente podrán inscribirse en este concurso.
                  </li>
                  <li>
                    No podrán participar instituciones que hayan participado
                    directamente en la preparación o ejecución de este concurso.
                  </li>
                </ul>
              </div>

              <div className="my-4">
                <h3>
                  <strong>
                    Categoría Organizaciones de la sociedad civil y Entidades
                    académicas
                  </strong>
                </h3>
                <ul className="list-disc list-inside ml-4">
                  <li>
                    La iniciativa debe referirse a experiencias o análisis
                    aplicadas a una ciudad latinoamericana o caribeña o haber
                    sido desarrollada para un país que se encuentre en dichas
                    regiones.
                  </li>
                  <li>
                    La organización postulante puede ser académica o de la
                    sociedad civil. No es requisito obligatorio estar
                    constituido legalmente para esta categoria.
                  </li>
                  <li>
                    La iniciativa debe haber sido implementada entre el 1 de
                    enero de 2021 y hasta la fecha de postulación.
                  </li>
                  <li>La organización debe estar operativa.</li>
                  <li>
                    No podrán postular iniciativas que estén participando
                    actualmente en el concurso Mujeres en Ruta 2025 de OBGEM, en
                    cualquiera de sus ciudades. Sin embargo otras iniciativas
                    del mismo proponente podrán inscribirse en este concurso.
                  </li>
                  <li>
                    No podrán participar instituciones que hayan participado
                    directa o indirectamente en la preparación o ejecución de
                    este concurso.
                  </li>
                </ul>
              </div>
            </div>
          </>
        ),
        en: (
          <>
            An “initiative” is any concrete action, program, project, or
            measure—implemented or in progress—that demonstrates or is expected
            to deliver measurable impacts on gender equity in sustainable
            transport. Gender-focused initiatives can range from specific
            interventions (e.g., campaigns or infrastructure upgrades) to
            comprehensive long-term strategies.
            <div className=" text-sm space-y-3 p-2">
              <div>
                <h3>
                  <strong>Public Institutions and Private Companies</strong>
                </h3>
                <ul className="list-disc list-inside ml-4">
                  <li>
                    Must have implemented the initiative in at least one city in
                    Latin America or the Caribbean, or have been developed for a
                    country in these regions.
                  </li>
                  <li>The applicant may be a public or private entity</li>
                  <li>
                    The initiative must have been implemented between January 1,
                    2021, and no later than one year prior to submission.
                  </li>
                  <li>
                    The organization must be legally registered and operational.
                  </li>
                  <li>
                    Initiatives currently participating in the “Mujeres en Ruta
                    2025” contest by OBGEM are not eligible in any of their
                    cities. Nevertheless, other initiatives from the same
                    applicant may still apply to this contest.
                  </li>
                  <li>
                    Organizations directly or indirectly involved in preparing
                    or managing this contest are not eligible.
                  </li>
                </ul>
              </div>

              <div className="my-4">
                <h3>
                  <strong>
                    Civil Society Organizations and Academic Entities
                  </strong>
                </h3>
                <ul className="list-disc list-inside ml-4">
                  <li>
                    The initiative must relate to experiences or research
                    applied in a Latin American or Caribbean city, or have been
                    developed for a country in these regions.
                  </li>
                  <li>
                    Applicants can be academic or civil society entities. Legal
                    registration is not mandatory for this category.
                  </li>
                  <li>
                    The initiative must have been implemented between January 1,
                    2021, and the submission date.
                  </li>
                  <li>The organization must be operational</li>
                  <li>
                    Initiatives currently participating in the “Mujeres en Ruta
                    2025” contest by OBGEM are not eligible in any of their
                    cities. Nevertheless, other initiatives from the same
                    applicant may still apply to this contest.
                  </li>
                  <li>
                    Organizations directly or indirectly involved in preparing
                    or managing this contest are not eligible.
                  </li>
                </ul>
              </div>
            </div>
          </>
        ),
        pt: (
          <>
            Entende-se por iniciativa qualquer ação, programa, projeto ou medida específica, promovida por uma instituição, grupo ou agente, implementada ou em fase de execução, que tenha impactos verificáveis ou previstos na equidade de gênero no setor de transportes sustentáveis. No contexto da mobilidade sensível ao gênero, uma iniciativa pode assumir várias formas: desde uma intervenção pontual (como uma campanha ou uma melhoria em infraestruturas) até a implementação de uma estratégia abrangente a longo prazo.
            <div className=" text-sm space-y-3 p-2">
              <div>
                <h3>
                  <strong>
                    Categoria: Instituições públicas e Empresas privadas
                  </strong>
                </h3>
                <ul className="list-disc list-inside ml-4">
                  <li>
                    A iniciativa deve ter sido implementada em pelo menos uma cidade da América Latina ou do Caribe;
                  </li>
                  <li>
                    A organização candidata pode ser uma instituição pública e/ou privada;
                  </li>
                  <li>
                    A iniciativa deve ter iniciado sua implementação entre 1º de janeiro de 2021 e até um ano antes da data de inscrição;
                  </li>
                  <li>
                    A organização deve estar legalmente constituída e em funcionamento;
                  </li>
                  <li>
                    Iniciativas que estejam participando atualmente da competição Mujeres en Ruta 2025 do OBGEM, em qualquer uma de suas cidades, não podem se candidatar. Entretanto, outras iniciativas do mesmo proponente podem se candidatar a este concurso.
                  </li>
                  <li>
                    Não poderão participar instituições que tenham participado direta ou indiretamente na preparação ou execução deste concurso.
                  </li>
                </ul>
              </div>

              <div className="my-4">
                <h3>
                  <strong>
                    Categoria: Organizações da Sociedade Civil e Entidades Acadêmicas
                  </strong>
                </h3>
                <ul className="list-disc list-inside ml-4">
                  <li>
                    A iniciativa deve se referir a experiências ou análises aplicadas a uma cidade da América Latina ou do Caribe ou que tenham sido desenvolvidas para um país que esteja localizado nessas regiões;
                  </li>
                  <li>
                    A organização candidata pode ser acadêmica ou da sociedade civil. Não é um requisito obrigatório estar legalmente constituído para essa categoria;
                  </li>
                  <li>
                    A iniciativa deve ter sido implementada entre 1º de janeiro de 2021 até a data de inscrição da iniciativa;
                  </li>
                  <li>A organização deve estar operacional;</li>
                  <li>
                    Iniciativas que estejam participando atualmente da competição Mujeres en Ruta 2025 do OBGEM, em qualquer uma de suas cidades, não podem se candidatar. Entretanto, outras iniciativas do mesmo proponente podem se candidatar a este concurso;
                  </li>
                  <li>
                    Não poderão participar instituições que tenham participado direta ou indiretamente na preparação ou execução deste concurso.
                  </li>
                </ul>
              </div>
            </div>
          </>
        ),
      },
    },
    {
      titulo: {
        es: "Postulación",
        en: "Application Process",
        pt: "Candidatura",
      },
      contenido: {
        es: (
          <>
            <ul className="list-disc list-inside">
              <li>
                Las postulaciones se realizarán exclusivamente a través de un
                formulario electrónico en línea en https://rumboalaequidad.org/
              </li>
              <li>
                Se deberá adjuntar una carta firmada por una autoridad de alta
                dirección de la institución, autorizando la postulación y el uso
                de información sobre la inicitiva y de su logo.
              </li>
              <li>
                La postulación se puede hacer en español (ES), inglés (EN) o
                portugués (PT).
              </li>
            </ul>
          </>
        ),
        en: (
          <>
            <ul className="list-disc list-inside">
              <li>
                Applications must be submitted exclusively through the online
                form at https://rumboalaequidad.org/
              </li>
              <li>
                Applicants must include a letter signed by a senior official of
                the institution, authorizing the submission and use of
                information and the organization’s logo.
              </li>
              <li>
                Applications can be submitted in Spanish (ES), English (EN), or
                Portuguese (PT).
              </li>
            </ul>
          </>
        ),
        pt: (
          <>
            <ul className="list-disc list-inside">
              <li>
                As candidaturas serão realizadas exclusivamente por meio de um formulário online em: https://rumboalaequidad.org/;
              </li>
              <li>
                Deve ser anexada uma carta assinada por uma autoridade de, no mínimo, nível diretivo da instituição, autorizando a inscrição e uso das informações sobre a inibitiva e de seu logotipo;
              </li>
              <li>
                A candidatura pode ser feita em espanhol (ES), inglês (EN) ou português (PT).
              </li>
            </ul>
          </>
        ),
      },
    },
    {
      titulo: {
        es: "Evaluación y Jurado",
        en: "Evaluation and Jury",
        pt: "Avaliação e Júri",
      },
      contenido: {
        es: (
          <>
            <div>
              <h1>
                Se evaluarán las postulaciones considerando los siguientes
                criterios:
              </h1>

              <div>
                <h3 className="font-bold text-base mb-2">
                  Categoría Instituciones públicas y Empresas privadas
                </h3>

                <div className="text-sm pl-6">
                  <div className="flex gap-4 border-b border-[#D9D6E1]">
                    <span className="font-bold text-lg w-12 p-3">30%</span>
                    <div>
                      <strong>Innovación</strong>
                      <h3>
                        Soluciones creativas frente a barreras de género en la
                        operación o gestión del transporte
                      </h3>
                    </div>
                  </div>
                  <div className="flex gap-4 border-b border-[#D9D6E1]">
                    <span className="font-bold text-lg w-12 p-3">30%</span>
                    <div>
                      <strong>Impacto</strong>
                      <h3>
                        Cambios positivos en inclusión, seguridad, participación
                        o empleabilidad de mujeres
                      </h3>
                    </div>
                  </div>
                  <div className="flex gap-4 border-b border-[#D9D6E1]">
                    <span className="font-bold text-lg w-12 p-3">10%</span>
                    <div>
                      <strong>Replicabilidad</strong>
                      <h3>
                        Potencial para ser aplicada en otras ciudades o empresas
                        del sector
                      </h3>
                    </div>
                  </div>
                  <div className="flex gap-4 border-b border-[#D9D6E1]">
                    <span className="font-bold text-lg w-12 p-3">10%</span>
                    <div>
                      <strong>Sostenibilidad</strong>
                      <h3>
                        Capacidad de mantenerse en el tiempo dentro de la
                        estructura organizacional
                      </h3>
                    </div>
                  </div>
                  <div className="flex gap-4 border-b border-[#D9D6E1]">
                    <span className="font-bold text-lg w-12 p-3">20%</span>
                    <div>
                      <strong>Evidencia</strong>
                      <h3>
                        Existencia de datos, documentación o resultados
                        concretos
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <h3 className="font-bold text-base mb-2">
                  Categoría Organizaciones de la sociedad civil y Entidades
                  académicas
                </h3>

                <div className="text-sm pl-6">
                  <div className="flex gap-4 border-b border-[#D9D6E1]">
                    <span className="font-bold text-lg w-12 p-3">30%</span>
                    <div>
                      <strong>Innovación</strong>
                      <h3>
                        Nuevos enfoques, herramientas o investigaciones que
                        aborden desigualdades de género
                      </h3>
                    </div>
                  </div>
                  <div className="flex gap-4 border-b border-[#D9D6E1]">
                    <span className="font-bold text-lg w-12 p-3">30%</span>
                    <div>
                      <strong>Impacto</strong>
                      <h3>
                        Resultados generados en sensibilización, incidencia o
                        generación de conocimiento aplicado
                      </h3>
                    </div>
                  </div>
                  <div className="flex gap-4 border-b border-[#D9D6E1]">
                    <span className="font-bold text-lg w-12 p-3">10%</span>
                    <div>
                      <strong>Replicabilidad</strong>
                      <h3>
                        Potencial para escalar o transferir el conocimiento o
                        metodología
                      </h3>
                    </div>
                  </div>
                  <div className="flex gap-4 border-b border-[#D9D6E1] ">
                    <span className="font-bold text-lg w-12 p-3">10%</span>
                    <div>
                      <strong>Sostenibilidad</strong>
                      <h3>
                        Continuidad del trabajo en el tiempo más allá del
                        proyecto específico
                      </h3>
                    </div>
                  </div>
                  <div className="flex gap-4 border-b border-[#D9D6E1]">
                    <span className="font-bold text-lg w-12 p-3">20%</span>
                    <div>
                      <strong>Evidencia</strong>
                      <h3>
                        Documentación, publicaciones o datos que respalden los
                        resultados obtenidos
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-4">
              ** El jurado estará compuesto por personas expertas en género,
              movilidad y gestión pública. **
            </div>
          </>
        ),
        en: (
          <>
            <div>
              <h1>
                Submissions will be evaluated according to the following
                criteria:
              </h1>

              <div>
                <h3 className="font-bold text-base mb-2">
                  Category: Public Institutions and Private Companies
                </h3>

                <div className="text-sm pl-6">
                  <div className="flex gap-4 border-b border-[#D9D6E1]">
                    <span className="font-bold text-lg w-12 p-3">30%</span>
                    <div>
                      <strong>Innovation</strong>
                      <h3>
                        Creative solutions addressing gender barriers in
                        transport operations or management
                      </h3>
                    </div>
                  </div>
                  <div className="flex gap-4 border-b border-[#D9D6E1]">
                    <span className="font-bold text-lg w-12 p-3">30%</span>
                    <div>
                      <strong>Impact</strong>
                      <h3>
                        Positive outcomes in inclusion, safety, participation,
                        or women’s employability
                      </h3>
                    </div>
                  </div>
                  <div className="flex gap-4 border-b border-[#D9D6E1]">
                    <span className="font-bold text-lg w-12 p-3">10%</span>
                    <div>
                      <strong>Replicability</strong>
                      <h3>
                        Potential to be implemented in other cities or
                        organizations
                      </h3>
                    </div>
                  </div>
                  <div className="flex gap-4 border-b border-[#D9D6E1]">
                    <span className="font-bold text-lg w-12 p-3">10%</span>
                    <div>
                      <strong>Sustainability</strong>
                      <h3>
                        Ability to remain effective over time within the
                        organization
                      </h3>
                    </div>
                  </div>
                  <div className="flex gap-4 border-b border-[#D9D6E1]">
                    <span className="font-bold text-lg w-12 p-3">20%</span>
                    <div>
                      <strong>Evidence</strong>
                      <h3>
                        Availability of data, documentation, or measurable
                        results
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <h3 className="font-bold text-base mb-2">
                  Category: Civil Society Organizations and Academic Entities
                </h3>

                <div className="text-sm pl-6">
                  <div className="flex gap-4 border-b border-[#D9D6E1]">
                    <span className="font-bold text-lg w-12 p-3">30%</span>
                    <div>
                      <strong>Innovation</strong>
                      <h3>
                        New approaches, tools, or research addressing gender
                        inequality
                      </h3>
                    </div>
                  </div>
                  <div className="flex gap-4 border-b border-[#D9D6E1]">
                    <span className="font-bold text-lg w-12 p-3">30%</span>
                    <div>
                      <strong>Impact</strong>
                      <h3>
                        Demonstrated results in awareness, advocacy, or applied
                        knowledge
                      </h3>
                    </div>
                  </div>
                  <div className="flex gap-4 border-b border-[#D9D6E1]">
                    <span className="font-bold text-lg w-12 p-3">10%</span>
                    <div>
                      <strong>Replicability</strong>
                      <h3>Potential to scale or transfer methodologies</h3>
                    </div>
                  </div>
                  <div className="flex gap-4 border-b border-[#D9D6E1] ">
                    <span className="font-bold text-lg w-12 p-3">10%</span>
                    <div>
                      <strong>Sustainability</strong>
                      <h3>Ability to continue beyond the project scope</h3>
                    </div>
                  </div>
                  <div className="flex gap-4 border-b border-[#D9D6E1]">
                    <span className="font-bold text-lg w-12 p-3">20%</span>
                    <div>
                      <strong>Evidence</strong>
                      <h3>
                        Publications, documentation, or data supporting outcomes
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-4">
              ** The jury will consist of experts in gender, mobility, and
              public management.**
            </div>
          </>
        ),
        pt: (
          <>
            <div>
              <h1>
                As candidaturas serão avaliadas tendo em conta os seguintes critérios:
              </h1>

              <div>
                <h3 className="font-bold text-base mb-2">
                  Categoria: Instituições públicas e empresas privadas
                </h3>

                <div className="text-sm pl-6">
                  <div className="flex gap-4 border-b border-[#D9D6E1]">
                    <span className="font-bold text-lg w-12 p-3">30%</span>
                    <div>
                      <strong>Inovação</strong>
                      <h3>
                        Soluções criativas para a superação de barreiras de gênero na operação ou gestão de transporte
                      </h3>
                    </div>
                  </div>
                  <div className="flex gap-4 border-b border-[#D9D6E1]">
                    <span className="font-bold text-lg w-12 p-3">30%</span>
                    <div>
                      <strong>Impacto</strong>
                      <h3>
                        Mudanças positivas na inclusão, segurança, participação ou empregabilidade das mulheres
                      </h3>
                    </div>
                  </div>
                  <div className="flex gap-4 border-b border-[#D9D6E1]">
                    <span className="font-bold text-lg w-12 p-3">10%</span>
                    <div>
                      <strong>Replicabilidade</strong>
                      <h3>
                        Potencial da iniciativa de aplicação em outras cidades ou empresas do setor
                      </h3>
                    </div>
                  </div>
                  <div className="flex gap-4 border-b border-[#D9D6E1]">
                    <span className="font-bold text-lg w-12 p-3">10%</span>
                    <div>
                      <strong>Sustentabilidade</strong>
                      <h3>
                        Capacidade de permanecer dentro da estrutura organizacional ao longo do tempo
                      </h3>
                    </div>
                  </div>
                  <div className="flex gap-4 border-b border-[#D9D6E1]">
                    <span className="font-bold text-lg w-12 p-3">20%</span>
                    <div>
                      <strong>Evidência</strong>
                      <h3>
                        Existência de dados, documentação ou resultados concretos
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <h3 className="font-bold text-base mb-2">
                  Categoria: Organizações da sociedade civil e entidades acadêmicas
                </h3>

                <div className="text-sm pl-6">
                  <div className="flex gap-4 border-b border-[#D9D6E1]">
                    <span className="font-bold text-lg w-12 p-3">30%</span>
                    <div>
                      <strong>Inovação</strong>
                      <h3>
                        Novas abordagens, ferramentas ou pesquisas que abordam as desigualdades de gênero
                      </h3>
                    </div>
                  </div>
                  <div className="flex gap-4 border-b border-[#D9D6E1]">
                    <span className="font-bold text-lg w-12 p-3">30%</span>
                    <div>
                      <strong>Impacto</strong>
                      <h3>
                        Resultados gerados na conscientização, advocacy (incidência) ou geração de conhecimento aplicado
                      </h3>
                    </div>
                  </div>
                  <div className="flex gap-4 border-b border-[#D9D6E1]">
                    <span className="font-bold text-lg w-12 p-3">10%</span>
                    <div>
                      <strong>Replicabilidade</strong>
                      <h3>
                        Potencial para dimensionar ou transferir conhecimento ou metodologia
                      </h3>
                    </div>
                  </div>
                  <div className="flex gap-4 border-b border-[#D9D6E1] ">
                    <span className="font-bold text-lg w-12 p-3">10%</span>
                    <div>
                      <strong>Sustentabilidade</strong>
                      <h3>
                        Continuidade do trabalho ao longo do tempo para além do projeto específico
                      </h3>
                    </div>
                  </div>
                  <div className="flex gap-4 border-b border-[#D9D6E1]">
                    <span className="font-bold text-lg w-12 p-3">20%</span>
                    <div>
                      <strong>Evidência</strong>
                      <h3>
                        Documentação, publicações ou dados que comprovem os resultados obtidos
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-4">
              ** O júri será composto por especialistas em gênero, mobilidade e gestão pública. **
            </div>
          </>
        ),
      },
    },
    {
      titulo: {
        es: "Fechas del concurso",
        en: "Contest Dates",
        pt: "Datas do Concurso",
      },
      contenido: {
        es: (
          <>
            <div className="text-[#5A478D] text-sm space-y-4 p-4">
              <div className="space-y-2">
                <div className="flex justify-between border-b border-[#D9D6E1] pb-1">
                  <span className="w-1/2 font-medium">
                    <strong>Etapa</strong>
                  </span>
                  <span className="w-1/2">
                    <strong>Fecha</strong>
                  </span>
                </div>
                <div className="flex justify-between border-b border-[#D9D6E1] pb-1">
                  <span className="w-1/2 font-medium">
                    Lanzamiento y apertura de postulaciones
                  </span>
                  <span className="w-1/2">25 de julio</span>
                </div>
                <div className="flex justify-between border-b border-[#D9D6E1] pb-1">
                  <span className="w-1/2 font-medium">
                    Cierre de postulaciones
                  </span>
                  <span className="w-1/2">25 de agosto</span>
                </div>
                <div className="flex justify-between border-b border-[#D9D6E1] pb-1">
                  <span className="w-1/2 font-medium">
                    Selección de ganadores
                  </span>
                  <span className="w-1/2">15 de septiembre</span>
                </div>
                <div className="flex justify-between border-b border-[#D9D6E1] pb-1">
                  <span className="w-1/2 font-medium">
                    Entrega de reconocimientos
                  </span>
                  <span className="w-1/2">
                    09 y 10 de octubre (por confirmar)
                  </span>
                </div>
              </div>
            </div>
          </>
        ),
        en: (
          <>
            <div className="text-[#5A478D] text-sm space-y-4 p-4">
              <div className="space-y-2">
                <div className="flex justify-between border-b border-[#D9D6E1] pb-1">
                  <span className="w-1/2 font-medium">
                    <strong>Stage</strong>
                  </span>
                  <span className="w-1/2">
                    <strong>Date</strong>
                  </span>
                </div>
                <div className="flex justify-between border-b border-[#D9D6E1] pb-1">
                  <span className="w-1/2 font-medium">
                    Launch and call for applications
                  </span>
                  <span className="w-1/2">July 25th</span>
                </div>
                <div className="flex justify-between border-b border-[#D9D6E1] pb-1">
                  <span className="w-1/2 font-medium">
                    Application deadline
                  </span>
                  <span className="w-1/2">August 25th</span>
                </div>
                <div className="flex justify-between border-b border-[#D9D6E1] pb-1">
                  <span className="w-1/2 font-medium">
                    Winners announcement
                  </span>
                  <span className="w-1/2">September 15th</span>
                </div>
                <div className="flex justify-between border-b border-[#D9D6E1] pb-1">
                  <span className="w-1/2 font-medium">Award ceremony</span>
                  <span className="w-1/2">October 09th – 10th (TBC) </span>
                </div>
              </div>
            </div>
          </>
        ),
        pt: (
          <>
            <div className="text-[#5A478D] text-sm space-y-4 p-4">
              <div className="space-y-2">
                <div className="flex justify-between border-b border-[#D9D6E1] pb-1">
                  <span className="w-1/2 font-medium">
                    <strong>Palco</strong>
                  </span>
                  <span className="w-1/2">
                    <strong>Data</strong>
                  </span>
                </div>
                <div className="flex justify-between border-b border-[#D9D6E1] pb-1">
                  <span className="w-1/2 font-medium">
                    Lançamento e abertura de candidaturas
                  </span>
                  <span className="w-1/2">25 de julho</span>
                </div>
                <div className="flex justify-between border-b border-[#D9D6E1] pb-1">
                  <span className="w-1/2 font-medium">
                    Encerramento das candidaturas
                  </span>
                  <span className="w-1/2">25 de agosto</span>
                </div>
                <div className="flex justify-between border-b border-[#D9D6E1] pb-1">
                  <span className="w-1/2 font-medium">
                    Seleção dos vencedores
                  </span>
                  <span className="w-1/2">15 de setembro</span>
                </div>
                <div className="flex justify-between border-b border-[#D9D6E1] pb-1">
                  <span className="w-1/2 font-medium">
                    Entrega dos prêmios
                  </span>
                  <span className="w-1/2">
                    09 e 10 de outubro (a confirmar)
                  </span>
                </div>
              </div>
            </div>
          </>
        ),
      },
    },
    {
      titulo: {
        es: "Premiación",
        en: "Awards",
        pt: "Prêmios",
      },
      contenido: {
        es: (
          <>
            {" "}
            <div className="text-sm space-y-4">
              <h3>
                Las tres iniciativas mejor evaluadas de cada categoría serán
                reconocidas con primer y segundo lugar y mención honrosa.
              </h3>
              <h3>
                La ceremonia de premiación se realizará en un evento
                internacional en Bogotá que tendrá lugar en octubre de 2025 y
                que será coproducido con junto el Observatorio Latinoamericano
                de Género y Movilidad (OBGEM) y en cuya oportunidad se premiará
                a los ganadores del concurso Mujeres en Ruta organizado por
                dicha institución. Durante el evento se desarrollarán además
                actividades técnicas, visitas, y espacios de intercambio entre
                las organizaciones seleccionadas.
              </h3>
              <h3>
                SoMoS LAC cubrirá los gastos de viaje y estadía en Bogotá de un
                representante de cada una de las instituciones ganadoras de los
                primero y segundo lugar de las dos categorías.
              </h3>
            </div>
          </>
        ),
        en: (
          <>
            {" "}
            <div className="text-sm space-y-4">
              <h3>
                The top three initiatives in each category will receive first
                place, second place, and honorable mention awards.
              </h3>
              <h3>
                The awards will be presented during an international event in
                Bogotá in October 2025, co-organized with the Latin American
                Gender and Mobility Observatory (OBGEM). During the event,
                winners of the “Mujeres en Ruta” contest organized by OBGEM will
                also be honored. The event will include technical sessions, site
                visits, and networking opportunities among the selected
                organizations.
              </h3>
              <h3>
                SoMoS LAC will cover travel and accommodation expenses in Bogotá
                for one representative of each first and second-place winning
                organization in both categories.
              </h3>
            </div>
          </>
        ),
        pt: (
          <>
            {" "}
            <div className="text-sm space-y-4">
              <h3>
                As três iniciativas com melhor avaliação em cada categoria serão reconhecidas com primeiro e segundo lugar, além de uma menção honrosa.
              </h3>
              <h3>
                A cerimônia de premiação será realizada em um evento internacional em Bogotá que acontecerá em outubro de 2025, que será promovido junto ao Observatório Latino-Americano de Gênero e Mobilidade (OBGEM). Na mesma ocasião serão premiadas as iniciativas vencedoras do concurso “Mujeres en Ruta” organizado pela referida instituição. Durante o evento, também serão desenvolvidas atividades técnicas, visitas e espaços de intercâmbio entre as organizações selecionadas.
              </h3>
              <h3>
                A SoMoS LAC cobrirá as despesas de viagem e hospedagem em Bogotá de um representante de cada uma das instituições vencedoras do primeiro e segundo lugar nas duas categorias.
              </h3>
            </div>
          </>
        ),
      },
    },
  ];

  const switchToSpanish = () => {
    toggleLanguage("es"); // Pass 'es' to toggleLanguage
  };

  const switchToEnglish = () => {
    toggleLanguage("en"); // Pass 'en' to toggleLanguage
  };

  const switchToPortuguese = () => {
    toggleLanguage("pt"); // Pass 'pt' to toggleLanguage
  };

  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div className="flex justify-end p-4 space-x-2">
        <button
          className={`rounded-full p-1.5 border ${language === "es" ? "bg-[#a49fc4]" : "bg-white hover:bg-[#a49fc4]"
            }`}
          onClick={switchToSpanish}
        >
          ES
        </button>
        <button
          className={`rounded-full p-1.5 border ${language === "en" ? "bg-[#a49fc4]" : "bg-white hover:bg-[#a49fc4]"
            }`}
          onClick={switchToEnglish}
        >
          EN
        </button>
        <button
          className={`rounded-full p-1.5 border ${language === "pt" ? "bg-[#a49fc4]" : "bg-white hover:bg-[#a49fc4]"
            }`}
          onClick={switchToPortuguese}
        >
          PT
        </button>
      </div>

      <div className="relative w-full">
        <img
          src="/ilustracion.png"
          alt="Banner principal"
          className="w-full h-auto object-cover hidden sm:block"
        />
        <img
          src="/ilustracion2.png"
          alt="Banner mobile"
          className="w-full h-auto object-cover  sm:hidden"
        />
        <div className="absolute sm:top-1/8 sm:left-2/12 transform -traslate-x-3/12 top-8 left-1.5">
          <p className="text-lg md:text-3xl sm:text-xl font-medium text-[#5A478D]">
            {language === "es"
              ? "concurso"
              : language === "en"
                ? "contest"
                : "concurso"}
          </p>
          <div className="bg-[#e79953] text-lg md:text-2xl sm:text-lg text-white inline-block px-1 py-1 font-bold rounded-sm">
            {language === "es"
              ? "¡Postula tu Iniciativa!"
              : language === "en"
                ? "Present Your Initiative!"
                : "Inscreva a sua Iniciativa! "}
          </div>

          <h2 className="text-lg md:text-3xl sm:text-xl font-extrabold text-[#3C3270]">
            {language === "es"
              ? "RUMBO A LA EQUIDAD:"
              : language === "en"
                ? "TOWARDS GENDER EQUITY:"
                : "RUMO À EQUIDADE:"}
          </h2>
          <p className="text-sm md:text-xl sm:text-lg text-[#5A478D] leading-tight w-47 sm:w-100">
            {language === "es"
              ? "Reconociendo iniciativas innovadoras en favor de la equidad de género en movilidad urbana"
              : language === "en"
                ? "Celebrating innovative initiatives that promote gender equity in urban mobility"
                : "Reconhecimento de iniciativas inovadoras em prol da igualdade de gênero na mobilidade urbana"}
          </p>
        </div>

        <div className="absolute w-full bottom-3 sm:bottom-2 md:bottom-3  ">
          <span className=" flex flex-col text-white text-base sm:text-xl md:text-2xl  items-center justify-center ">
            {language === "es"
              ? "¡Participa! 25/07 al 25/08"
              : language === "en"
                ? "Participate! July 25th to August 25th"
                : "Participe! 25/07 a 25/08"}
          </span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row p-6 gap-6 max-w-6xl mx-auto my-4">
        <div className="w-full md:w-1/3">
          {secciones.map((sec, i) => (
            <button
              key={i}
              className={`w-full text-left  font-semibold text-l px-4 py-3 mb-2 rounded-xl  transition ${activo === i
                ? "bg-white border border-[#a49fc4] text-[#5d5593] hover:bg-gray-100"
                : "bg-transparent  hover:bg-gray-100 "
                }`}
              onClick={() => setActivo(i)}
            >
              {sec.titulo[language]}
            </button>
          ))}
        </div>

        <div className="w-full md:w-2/3 bg-white px-2 sm:px-6 rounded ">
          <h2 className="text-2xl font-bold mb-4">
            {secciones[activo].titulo[language]}
          </h2>
          <h2 className="text-sm whitespace-pre-line">
            {secciones[activo].contenido[language]}
          </h2>
        </div>
      </div>

      <div className="flex flex-col md:flex-row max-w-6xl justify-items-end-safe gap-4 py-10">
        <button
          onClick={() => navigate("/nueva-ficha")}
          className="bg-[#5d5593] text-white px-4 py-3 rounded-xl hover:bg-[#a49fc4]"
        >
          {language === "es"
            ? "Comenzar postulación"
            : language === "en"
              ? "Start Application"
              : "Iniciar Candidatura"}
        </button>

        <button
          className="border border-[#5d5593] text-[#5d5593] px-4 py-2 rounded-xl hover:bg-[#a49fc4] flex items-center justify-center"
          onClick={() => {
            const link = document.createElement("a");
            // if (language === "es") {
            //   link.href = "/BASESDELCONCURSO-Genero.docx";
            //   link.download = "BASESDELCONCURSO-Genero.docx";
            // } else if (language === "en") {
            //   link.href = "/TowardsGenderEquity_TdR_ingles.docx";
            //   link.download = "TowardsGenderEquity_TdR_ingles.docx";
            // } else if (language === "pt") {
            //   link.href = "/Rumbo-Equidade_TdR_portugues.docx";
            //   link.download = "Rumbo-Equidade_TdR_portugues.docx";
            // }
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}
        >
          {language === "es"
            ? "Descargar bases"
            : language === "en"
              ? "Download Guidelines"
              : "Baixar Regulamento"}
          <MdOutlineFileDownload className="text-2xl m-1 mb-1 ml-2 inline" />
        </button>
      </div>
    </div>
  );
}

export default HomePage;
